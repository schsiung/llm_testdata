

  const matchResult = rawStr.match(STRIKETHROUGH_REG);
};
const renderer = (rawStr: string): string => {
  if (!matchResult) {
  }
  return `<del>${escape(matchResult[1])}</del>`;

  name: "Strikethrough",
  matcher,
};