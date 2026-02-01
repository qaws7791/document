const HANGUL_OR_ALPHANUMERIC_REGEX = /[0-9A-Za-z가-힣]/u;
const EMOJI_REGEX = /\p{Extended_Pictographic}/u;
const FENCE_REGEX = /^\s*([`~]{3,})/;
const PROBLEMATIC_ENDINGS = new Set([")", "]", "}", '"', "'", ".", "!", "?"]);

const isWordLike = (char) =>
  Boolean(char) && HANGUL_OR_ALPHANUMERIC_REGEX.test(char);
const isEmoji = (char) => Boolean(char) && EMOJI_REGEX.test(char);
const isNextCharProblematic = (char) => isWordLike(char) || isEmoji(char);

const buildInlineCodeRanges = (line) => {
  const ranges = [];
  let delimiterLength = 0;
  let startIndex = -1;
  for (let index = 0; index < line.length; ) {
    if (line[index] !== "`") {
      index += 1;
      continue;
    }

    let runLength = 1;
    while (line[index + runLength] === "`") {
      runLength += 1;
    }

    if (delimiterLength === 0) {
      delimiterLength = runLength;
      startIndex = index;
    } else if (runLength === delimiterLength) {
      ranges.push([startIndex, index + runLength]);
      delimiterLength = 0;
      startIndex = -1;
    }

    index += runLength;
  }

  return ranges;
};

const isIndexWithinRanges = (index, ranges) =>
  ranges.some(([start, end]) => index >= start && index < end);

const startsFence = (line) => {
  const match = line.match(FENCE_REGEX);
  if (!match) {
    return null;
  }
  return { marker: match[1][0], length: match[1].length };
};

const closesFence = (line, fenceState) => {
  const trimmed = line.trim();
  let count = 0;
  while (count < trimmed.length && trimmed[count] === fenceState.marker) {
    count += 1;
  }
  return count >= fenceState.length;
};

module.exports = {
  names: ["fix-korean-bold"],
  description:
    "Insert a space after bold spans ending with closing punctuation when they touch Hangul, numbers, or emoji.",
  tags: ["emphasis", "content"],
  parser: "none",
  function: (params, onError) => {
    let fenceState = null;

    params.lines.forEach((line, index) => {
      const lineNumber = index + 1;

      if (fenceState) {
        if (closesFence(line, fenceState)) {
          fenceState = null;
        }
        return;
      }

      const fenceStart = startsFence(line);
      if (fenceStart) {
        fenceState = fenceStart;
        return;
      }

      if (!line.includes("**")) {
        return;
      }

      const inlineRanges = buildInlineCodeRanges(line);
      let searchStart = 0;

      while (searchStart < line.length) {
        const openIndex = line.indexOf("**", searchStart);
        if (openIndex === -1) {
          break;
        }

        if (isIndexWithinRanges(openIndex, inlineRanges)) {
          searchStart = openIndex + 2;
          continue;
        }

        const closeIndex = line.indexOf("**", openIndex + 2);
        if (closeIndex === -1) {
          break;
        }

        if (isIndexWithinRanges(closeIndex, inlineRanges)) {
          searchStart = closeIndex + 2;
          continue;
        }

        const content = line.slice(openIndex + 2, closeIndex);
        if (!content) {
          searchStart = closeIndex + 2;
          continue;
        }

        const contentWithoutTrailingSpace = content.replace(/\s+$/u, "");
        if (!contentWithoutTrailingSpace) {
          searchStart = closeIndex + 2;
          continue;
        }

        const lastChar = contentWithoutTrailingSpace.charAt(
          contentWithoutTrailingSpace.length - 1
        );
        if (!PROBLEMATIC_ENDINGS.has(lastChar)) {
          searchStart = closeIndex + 2;
          continue;
        }

        const nextCharIndex = closeIndex + 2;
        const nextCharMatch = line.slice(nextCharIndex).match(/^./u);
        const nextChar = nextCharMatch ? nextCharMatch[0] : "";
        if (!isNextCharProblematic(nextChar)) {
          searchStart = closeIndex + 2;
          continue;
        }

        onError({
          lineNumber,
          detail:
            "Insert a space after closing ** when punctuation-ending bold text touches adjacent characters.",
          context: line.slice(
            openIndex,
            Math.min(line.length, nextCharIndex + nextChar.length)
          ),
          range: [closeIndex + 1, 2],
          fixInfo: {
            editColumn: nextCharIndex + 1,
            insertText: " ",
          },
        });

        searchStart = closeIndex + 2;
      }
    });
  },
};
