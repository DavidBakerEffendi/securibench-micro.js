const FIELD_NAME = "name";

const handler = (req, res) => {
  let x = 2;
  x++;

  const name = req.query[FIELD_NAME];

  if (x === 2) {
    res.write(`${name}\n`); // OK
  }

  res.end();
};

const getDescription = () => {
  return "correlated test with addition";
};

const getVulnerabilityCount = () => {
  return 0;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
