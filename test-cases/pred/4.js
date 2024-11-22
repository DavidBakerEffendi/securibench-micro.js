const FIELD_NAME = "name";

const handler = (req, res) => {
  const x = 3;
  const name = req.query[FIELD_NAME];

  if (x === 3) {
    res.write(`${name}\n`); // BAD
  }

  res.end();
};

const getDescription = () => {
  return "correlated test with an int variable";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
