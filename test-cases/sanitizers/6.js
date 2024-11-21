const { StringBuffer, Character } = require("../../lib");

const FIELD_NAME = "name";

const clean = (name) => {
  let buf = new StringBuffer();
  for (let i = 0; i < name.length; i++) {
    let ch = name[i];

    if (Character.isLetter(ch) || Character.isDigit(ch) || ch == "_") {
      buf.append(ch);
    } else {
      buf.append("?");
    }
  }
  return buf.toString();
};

const handler = (req, resp) => {
  const name = req.query[FIELD_NAME];
  const _clean = clean(name);

  res.setHeader("content-type", "text/html");

  resp.send("<html>" + _clean + "</html>"); // OK
};

const getDescription = () => {
  return "sanitizers for directory traversal";
};

const getVulnerabilityCount = () => {
  return 0;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
