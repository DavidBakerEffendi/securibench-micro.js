const { Character } = require("../../lib");

const FIELD_NAME = "name";

const clean = (name) => {
  let buf = "";
  for (let i = 0; i < name.length; i++) {
    let ch = name[i];
    switch (ch) {
      case "<":
        buf += "&lt;";
        break;
      case ">":
        buf += "&gt;";
        break;
      case "&":
        buf += "&amp;";
        break;
      default:
        if (Character.isLetter(ch) || Character.isDigit(ch) || ch == "_") {
          buf += ch;
        } else {
          buf += "?";
        }
    }
  }
  return buf.toString();
};

const handler = (req, res) => {
  const name = req.query[FIELD_NAME];
  const _clean = clean(name);

  res.setHeader("content-type", "text/html");

  res.write(`<html>`);
  res.write(`<b>${name}</b>`); // BAD
  res.write(`<b>${_clean}</b>`); // OK
  res.write(`</html>`);

  res.end();
};

const getDescription = () => {
  return "simple sanitization check";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
