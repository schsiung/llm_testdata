const { randomUUID } = require("crypto");
const { encryptCookie, verifyCsrf } = require("./encryption");

const cookieParams = {
  httpOnly: true,
  sameSite: "strict",
  signed: true,
  maxAge: 300000
};

const csurf = (secret, forbiddenMethods, excludedUrls) => {
  if (!forbiddenMethods) forbiddenMethods = ["POST", "PUT", "PATCH"];
  if (secret.length != 32)
    throw new Error("Your secret is not the required 32 characters long");
  return (req, res, next) => {
    if (!req.cookies || !res.cookie || !req.signedCookies)
      throw new Error("No Cookie middleware is installed");
    if (
      // if any excludedUrl matches as either string or regexp
      excludedUrls?.filter(
        (x) => x == req.originalUrl || (x.test && x.test(req.originalUrl))
      ).length > 0
    ) {
      req.csrfToken = () => {
        const csrfToken = randomUUID();
        res.cookie("csrfToken", encryptCookie(csrfToken, secret), cookieParams);
        return csrfToken;
      };
      return next();
    } else if (forbiddenMethods.includes(req.method)) {
      const { csrfToken } = req.signedCookies;
      if (
        csrfToken != undefined &&
        verifyCsrf(req.body?._csrf, csrfToken, secret)
      ) {
        res.cookie("csrfToken", null, cookieParams);
        return next();
      } else {
        throw new Error(
          `Did not get a valid CSRF token for '${req.method} ${req.originalUrl}': ${req.body?._csrf} v. ${csrfToken}`
        );
      }
    } else {
      req.csrfToken = () => {
        const csrfToken = randomUUID();
        res.cookie("csrfToken", encryptCookie(csrfToken, secret), cookieParams);
        return csrfToken;
      };
      return next();
    }
  };
};

module.exports = csurf;
