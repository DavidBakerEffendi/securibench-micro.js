const FIELD_NAME = "name";

const handler = (req, res) => {
  const name = req.query[FIELD_NAME];

  function f(res) {
    res.write(`${name}\n`); // BAD
  }

  f(res);
  res.end();
};

const getDescription = () => {
  return "store stuff in a field";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
