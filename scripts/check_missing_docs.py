#!/usr/bin/env python3
"""Check for markdown pages missing from docs.json navigation."""

from __future__ import annotations

import json
import os
from pathlib import Path
from typing import Dict, Iterable, Set

import sys

SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from scripts.update_docs_navigation import (
    REPO_ROOT as SHARED_REPO_ROOT,
    SECTION_CONFIG,
    is_markdown,
    slugify,
)

REPO_ROOT = SHARED_REPO_ROOT
DOCS_PATH = REPO_ROOT / "docs.json"
IGNORED_DIR_NAMES = {"assets"}


def iter_markdown_files(base_path: Path) -> Iterable[Path]:
    """Yield markdown file paths under base_path, skipping ignored directories."""
    for root, dirnames, filenames in os.walk(base_path):
        current_dir = Path(root)
        dirnames[:] = [d for d in dirnames if d.lower() not in IGNORED_DIR_NAMES]

        for filename in filenames:
            file_path = current_dir / filename
            if not is_markdown(file_path):
                continue
            # Skip root-level README.* files to match navigation expectations.
            if file_path.stem.lower() == "readme" and file_path.parent == base_path:
                continue
            yield file_path


def collect_actual_pages() -> Set[str]:
    """Collect slugified paths for markdown files in target sections."""
    pages: Set[str] = set()
    for section in SECTION_CONFIG:
        base_path = REPO_ROOT / section["path"]
        if not base_path.exists():
            continue
        for file_path in iter_markdown_files(base_path):
            pages.add(slugify(file_path))
    return pages


def flatten_pages(entries: Iterable) -> Iterable[str]:
    """Yield page slug strings from a Mintlify navigation pages list."""
    for entry in entries:
        if isinstance(entry, str):
            yield entry
        elif isinstance(entry, dict):
            nested = entry.get("pages")
            if nested:
                yield from flatten_pages(nested)


def collect_navigation_pages(navigation: Dict) -> Set[str]:
    """Collect page slugs that are already present in docs.json navigation."""
    dropdowns = navigation.get("dropdowns", [])
    nav_pages: Set[str] = set()

    # Map dropdown names for quick lookup.
    dropdown_lookup = {
        dropdown.get("dropdown"): dropdown for dropdown in dropdowns if isinstance(dropdown, dict)
    }

    for section in SECTION_CONFIG:
        dropdown_name = section["dropdown"]
        dropdown = dropdown_lookup.get(dropdown_name)
        if not dropdown:
            continue

        for group in dropdown.get("groups", []):
            if not isinstance(group, dict):
                continue
            nav_pages.update(flatten_pages(group.get("pages", [])))

    return nav_pages


def load_navigation() -> Dict:
    if not DOCS_PATH.exists():
        raise FileNotFoundError(f"Cannot find docs.json at {DOCS_PATH}")
    with DOCS_PATH.open(encoding="utf-8") as file:
        data = json.load(file)

    navigation = data.get("navigation")
    if not isinstance(navigation, dict):
        raise ValueError("docs.json navigation section is missing or malformed.")
    return navigation


def main() -> None:
    actual_pages = collect_actual_pages()
    navigation = load_navigation()
    documented_pages = collect_navigation_pages(navigation)

    missing_pages = sorted(actual_pages - documented_pages)

    if not missing_pages:
        print("All markdown pages are included in docs.json navigation.")
        return

    print(f"Missing pages ({len(missing_pages)}):")
    for page in missing_pages:
        print(f"- {page}")


if __name__ == "__main__":
    main()
