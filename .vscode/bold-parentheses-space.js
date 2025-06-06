// bold-parentheses-space.js
module.exports = {
  names: ["bold-parentheses-space"],
  description:
    "Bold text containing any parenthesis should be followed by a space",
  tags: ["formatting", "bold"],
  function: function (params, onError) {
    // itinerate through each line of the document
    params.lines.forEach((line, lineIndex) => {
      // regex to find bold text in the format **text**
      const boldRegex = /\*\*([^*]+)\*\*/g;
      let boldMatch;

      while ((boldMatch = boldRegex.exec(line)) !== null) {
        const fullMatch = boldMatch[0]; // the full match including **
        const boldContent = boldMatch[1]; // the content inside **
        const startPosition = boldMatch.index;
        const endPosition = startPosition + fullMatch.length;

        // check if the bold content contains any type of bracket
        if (/[^a-zA-Z0-9가-힣]/.test(boldContent)) {
          // 볼드체 뒤에 공백이 없는지 확인
          if (endPosition < line.length && line[endPosition] !== " ") {
            onError({
              lineNumber: lineIndex + 1,
              detail: "Bold text with bracket should be followed by a space",
              context: fullMatch,
              range: [startPosition, fullMatch.length],
              fixInfo: {
                editColumn: endPosition + 1, // 1-based column index for fixInfo
                deleteCount: 0,
                insertText: " ", // 공백 추가
              },
            });
          }
        }
      }
    });
  },
};
