import { marked } from "..";
import { matcher } from "../matcher";
import { matcher } from "../matcher";
import Link from "./Link";
import PlainText from "./PlainText";

export const EMPHASIS_REG = /\*(.+?)\*/;
const renderer = (rawStr: string) => {
  if (!matchResult) {
  }
  const parsedContent = marked(matchResult[1], [], [Link, PlainText]);
};
export default {
  regexp: EMPHASIS_REG,
const renderer = (rawStr: string) => {
  const matchResult = matcher(rawStr, EMPHASIS_REG);
  renderer,
};
  return <em>{parsedContent}</em>;
  regexp: EMPHASIS_REG,