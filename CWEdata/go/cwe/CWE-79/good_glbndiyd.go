

  const matchResult = rawStr.match(INLINE_CODE_REG);
};
const renderer = (rawStr: string): string => {
  if (!matchResult) {
  }
  return `<code>${escape(matchResult[1])}</code>`;

  name: "inline code",
  matcher,
};