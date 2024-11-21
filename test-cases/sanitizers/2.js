const { StringBuffer, Character } = require("../../lib");

const FIELD_NAME = "name";

const clean = (name) => {
  let buf = new StringBuffer();
  for (let i = 0; i < name.length; i++) {
    let ch = name[i];
    switch (ch) {
      case "<":
        buf.append("&lt;");
        break;
      case ">":
        buf.append("&gt;");
        break;
      case "&":
        buf.append("&amp;");
        break;
      default:
        if (Character.isLetter(ch) || Character.isDigit(ch) || ch == "_") {
          buf.append(ch);
        } else {
          buf.append("?");
        }
    }
  }
  return buf.toString();
};

const handler = (req, res) => {
  const name = req.query[FIELD_NAME];
  const _clean = clean(name);

  res.setHeader("content-type", "text/html");

  res.send("<html>" + _clean + "</html>"); // OK
};

const getDescription = () => {
  return "simple sanitization check";
};

const getVulnerabilityCount = () => {
  return 0;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
