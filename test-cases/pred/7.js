const FIELD_NAME = "name";

const handler = (req, res) => {
  let x = 2;
  let y = 9;
  x++;
  y -= 2;

  const name = req.query[FIELD_NAME];

  if (x + y === 11) {
    res.write(`${name}\n`); // OK
  }

  res.end();
};

const getDescription = () => {
  return "correlated test with multiple variables";
};

const getVulnerabilityCount = () => {
  return 0;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
