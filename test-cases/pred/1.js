const FIELD_NAME = "name";

const handler = (req, res) => {
  const name = req.query[FIELD_NAME];

  if (false) {
    res.write(`${name}\n`); // OK
  }

  res.end();
};

const getDescription = () => {
  return "simple if(false) test";
};

const getVulnerabilityCount = () => {
  return 0;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
