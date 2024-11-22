const FIELD_NAME = "name";

const handler = (req, res) => {
  const name = req.query[FIELD_NAME];
  req.session["name"] = name;

  const e = req.session;
  for (let attrName in e) {
    const attrValue = e[attrName];
    res.write(`${attrValue}\n`); // BAD
  }

  res.end();
};

const getDescription = () => {
  return "test of session enumeration";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
