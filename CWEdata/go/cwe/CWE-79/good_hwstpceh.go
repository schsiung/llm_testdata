

  const matchResult = rawStr.match(HEADING_REG);
};
const renderer = (rawStr: string): string => {
  if (!matchResult) {
  }
  const level = matchResult[1].length;
};
export default {
  regex: HEADING_REG,
  renderer,