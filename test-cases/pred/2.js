const FIELD_NAME = "name";

const handler = (req, res) => {
  let name = "abc";
  let choice = Math.random() < 0.5;

  if (choice) {
    name = req.query[FIELD_NAME];
  }

  if (choice) {
    res.write(`${name}\n`); // BAD
  }

  res.end();
};

const getDescription = () => {
  return "simple correlated tests";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
