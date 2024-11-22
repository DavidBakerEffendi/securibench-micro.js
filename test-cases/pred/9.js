const FIELD_NAME = "name";

const handler = (req, res) => {
  const name = req.query[FIELD_NAME];
  const array = [name, "abc"];

  if (array[1] === name) {
    res.write(`${name}\n`); // BAD
  }

  res.end();
};

const getDescription = () => {
  return "using an array element as in a predicate";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
