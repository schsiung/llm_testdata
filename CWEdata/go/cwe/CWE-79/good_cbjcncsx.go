

  const matchResult = rawStr.match(BLOCKQUOTE_REG);
};
const renderer = (rawStr: string): string => {
  if (!matchResult) {
  }
  return `<blockquote>${escape(matchResult[1])}</blockquote>`;

  name: "blockquote",
  matcher,
};