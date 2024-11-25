const { Character } = require("../../lib");

const FIELD_NAME = "name";

const clean = (name) => {
  let buf = "";
  for (let i = 0; i < name.length; i++) {
    let ch = name[i];

    if (Character.isLetter(ch) || Character.isDigit(ch) || ch == "_") {
      buf += ch;
    } else {
      buf += "?";
    }
  }
  return buf.toString();
};

const handler = (req, resp) => {
  const name = req.query[FIELD_NAME];
  const _clean = clean(name);

  resp.setHeader("content-type", "text/html");

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
