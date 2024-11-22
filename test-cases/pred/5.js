const FIELD_NAME = "name";

const handler = (req, res) => {
  const x = 3;
  const name = req.query[FIELD_NAME];

  if ((x > 5 && x % 7 === 29) || x === 3) {
    res.write(`${name}\n`); // BAD
  }

  res.end();
};

const getDescription = () => {
  return "correlated test with a complex conditional";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
