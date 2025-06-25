import { inlineElementParserList } from ".";
import { marked } from "..";

export const PARAGRAPH_REG = /^([^\n]+)/;

  const parsedContent = marked(rawStr, [], inlineElementParserList);
};
export default {
  regexp: PARAGRAPH_REG,
};
const renderer = (rawStr: string) => {
  return <p>{parsedContent}</p>;
  regexp: PARAGRAPH_REG,