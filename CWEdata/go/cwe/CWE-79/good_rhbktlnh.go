

  const matchResult = rawStr.match(TAG_REG);
    return matchResult;
  return null;

  const matchResult = matcher(rawStr);
    return rawStr;

};
export default {
  regex: TAG_REG,
  renderer,