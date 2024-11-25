const FIELD_NAME = "name";

const clean = (name) => {
  let buf = "";
  for (let i = 0; i < name.length; i++) {
    let ch = name[i];
    switch (ch) {
      case "&":
        buf += "&amp;";
        break;
      default:
        buf += ch;
        break;
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
  res.write(`<b>${_clean}</b>`); // BAD
  res.write(`</html>`);

  res.end();
};

const getDescription = () => {
  return "buggy sanitizer";
};

const getVulnerabilityCount = () => {
  return 2;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
