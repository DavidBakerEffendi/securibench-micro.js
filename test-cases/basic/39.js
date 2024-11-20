const FIELD_NAME = "name";

const handler = (req, res) => {
  const name = req.query[FIELD_NAME];
  const tok = name.split("\t");

  let i = 0;
  while (i < tok.length) {
    res.write(`${tok[i++]}\n`); // BAD
  }

  res.end();
};

const getDescription = () => {
  return "multi-part request test";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
