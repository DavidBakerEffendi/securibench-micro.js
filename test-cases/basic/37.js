const FIELD_NAME = "name";

const handler = (req, res) => {
  const name = req.query[FIELD_NAME];
  const tok = name.split("\t");

  tok.forEach((token) => {
    res.write(`${token}\n`); // BAD
  });

  res.end();
};

const getDescription = () => {
  return "tokenizing string test";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
