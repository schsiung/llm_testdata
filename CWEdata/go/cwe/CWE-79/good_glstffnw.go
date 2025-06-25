import { escape } from "lodash-es";
import { matcher } from "../matcher";

export const PLAIN_LINK_REG = /(https?:\/\/[^ ]+)/;

const renderer = (rawStr: string) => {
  const matchResult = matcher(rawStr, PLAIN_LINK_REG);
  if (!matchResult) {
    return rawStr;
  }

  return (
    <a className="link" target="_blank" rel="noreferrer" href={escape(matchResult[1])}>
      {escape(matchResult[1])}
    </a>
  );
};

export default {
  name: "plain link",
  regexp: PLAIN_LINK_REG,
  renderer,
};
import { escape } from "lodash-es";
import { matcher } from "../matcher";

export const PLAIN_LINK_REG = /(https?:\/\/[^ ]+)/;

const renderer = (rawStr: string) => {
  const matchResult = matcher(rawStr, PLAIN_LINK_REG);
  if (!matchResult) {
    return rawStr;
  }

  return (
    <a className="link" target="_blank" rel="noreferrer" href={escape(matchResult[1])}>
      {escape(matchResult[1])}
    </a>
  );
};

export default {
  name: "plain link",
  regexp: PLAIN_LINK_REG,
  renderer,
};