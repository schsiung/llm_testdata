import { marked } from "..";
import { matcher } from "../matcher";
import { matcher } from "../matcher";
import Link from "./Link";
import PlainText from "./PlainText";

export const BOLD_EMPHASIS_REG = /\*\*\*(.+?)\*\*\*/;
const renderer = (rawStr: string) => {
  if (!matchResult) {
  }
  const parsedContent = marked(matchResult[1], [], [Link, PlainText]);
    <strong>
    </strong>
};
const renderer = (rawStr: string) => {
  const matchResult = matcher(rawStr, BOLD_EMPHASIS_REG);

export default {
  name: "bold emphasis",
  regexp: BOLD_EMPHASIS_REG,
  renderer,
  return (
    <strong>
      <em>${parsedContent}</em>
    </strong>
  );
  regexp: BOLD_EMPHASIS_REG,