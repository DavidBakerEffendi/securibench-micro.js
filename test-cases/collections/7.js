const FIELD_NAME = "name";

const handler = (req, res) => {
  const name = req.query[FIELD_NAME];
  const m = new Map();
  m.set("a", name);

  for (let [k, v] of m) {
    res.write(k + "\n"); // OK
    res.write(v + "\n"); // BAD
  }

  res.end();
};

const getDescription = () => {
  return "test of map iterators";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
