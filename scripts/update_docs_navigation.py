#!/usr/bin/env python3
"""Generate Mintlify navigation based on repository markdown structure."""

from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any, Dict, List, Union


REPO_ROOT = Path(__file__).resolve().parent.parent
DOCS_PATH = REPO_ROOT / "docs.json"

SECTION_CONFIG = [
    {
        "path": "computer-science",
        "dropdown": "Computer Science",
        "description": "CS 지식",
        "icon": "cpu",
    },
    {
        "path": "development",
        "dropdown": "Development",
        "description": "개발 지식",
        "icon": "code",
    },
    {
        "path": "project",
        "dropdown": "Project",
        "description": "팀 프로젝트 관련",
        "icon": "square-library",
    },
    {
        "path": "software-engineering",
        "dropdown": "Software Engineering",
        "description": "소프트웨어 공학",
        "icon": "wrench",
    },
    {
        "path": "personal",
        "dropdown": "Personal",
        "description": "개인 기록",
        "icon": "feather",
    },
]

NAME_OVERRIDES = {
    "ai": "AI",
    "api": "API",
    "aws": "AWS",
    "ci": "CI",
    "cd": "CD",
    "cicd": "CI/CD",
    "css": "CSS",
    "db": "DB",
    "graphql": "GraphQL",
    "html": "HTML",
    "http": "HTTP",
    "https": "HTTPS",
    "jwt": "JWT",
    "k8s": "K8s",
    "koa": "Koa",
    "linux": "Linux",
    "mongodb": "MongoDB",
    "nestjs": "NestJS",
    "nextjs": "Next.js",
    "nodejs": "Node.js",
    "oauth": "OAuth",
    "oauth2": "OAuth2",
    "os": "OS",
    "qa": "QA",
    "rest": "REST",
    "seo": "SEO",
    "sql": "SQL",
    "sso": "SSO",
    "ssl": "SSL",
    "tls": "TLS",
    "typescript": "TypeScript",
    "ui": "UI",
    "ux": "UX",
    "web": "Web",
    "ec2": "EC2",
    "s3": "S3",
    "cloudfront": "CloudFront",
}

MarkdownNode = Union[str, Dict[str, Any]]


def is_markdown(path: Path) -> bool:
    return path.suffix.lower() in {".md", ".mdx"}


def slugify(path: Path) -> str:
    relative = path.relative_to(REPO_ROOT)
    return relative.as_posix().rsplit(".", 1)[0]


def format_label(name: str) -> str:
    lower_name = name.lower()
    if lower_name in NAME_OVERRIDES:
        return NAME_OVERRIDES[lower_name]

    parts = re.split(r"[-_.]+", name)
    formatted_parts = []
    for part in parts:
        if not part:
            continue
        lower_part = part.lower()
        formatted_parts.append(NAME_OVERRIDES.get(lower_part, part.capitalize()))
    return " ".join(formatted_parts)


def collect_pages(directory: Path) -> List[MarkdownNode]:
    entries: List[MarkdownNode] = []

    files = sorted(
        (child for child in directory.iterdir() if child.is_file() and is_markdown(child)),
        key=lambda item: item.name.lower(),
    )

    for file_path in files:
        entries.append(slugify(file_path))

    subdirectories = sorted(
        (child for child in directory.iterdir() if child.is_dir()),
        key=lambda item: item.name.lower(),
    )

    for subdirectory in subdirectories:
        pages = collect_pages(subdirectory)
        if pages:
            entries.append({"group": format_label(subdirectory.name), "pages": pages})

    return entries


def build_groups(base_path: Path) -> List[Dict[str, Any]]:
    groups: List[Dict[str, Any]] = []

    root_files = sorted(
        (child for child in base_path.iterdir() if child.is_file() and is_markdown(child)),
        key=lambda item: item.name.lower(),
    )

    for file_path in root_files:
        if file_path.stem.lower() == "readme":
            continue
        groups.append(
            {"group": format_label(file_path.stem), "pages": [slugify(file_path)]}
        )

    subdirectories = sorted(
        (child for child in base_path.iterdir() if child.is_dir()),
        key=lambda item: item.name.lower(),
    )

    for subdirectory in subdirectories:
        pages = collect_pages(subdirectory)
        if pages:
            groups.append({"group": format_label(subdirectory.name), "pages": pages})

    return groups


def generate_dropdowns() -> List[Dict[str, Any]]:
    dropdowns = []
    for section in SECTION_CONFIG:
        base_path = REPO_ROOT / section["path"]
        if not base_path.exists():
            continue

        groups = build_groups(base_path)
        if not groups:
            continue

        dropdowns.append(
            {
                "dropdown": section["dropdown"],
                "description": section["description"],
                "icon": section["icon"],
                "groups": groups,
            }
        )

    return dropdowns


def update_docs_navigation() -> None:
    if not DOCS_PATH.exists():
        raise FileNotFoundError(f"Cannot find docs.json at {DOCS_PATH}")

    with DOCS_PATH.open(encoding="utf-8") as file:
        data = json.load(file)

    navigation = data.get("navigation")
    if navigation is None or not isinstance(navigation, dict):
        navigation = {}
        data["navigation"] = navigation

    navigation["dropdowns"] = generate_dropdowns()

    with DOCS_PATH.open("w", encoding="utf-8") as file:
        json.dump(data, file, ensure_ascii=False, indent=2)
        file.write("\n")


def main() -> None:
    update_docs_navigation()


if __name__ == "__main__":
    main()
