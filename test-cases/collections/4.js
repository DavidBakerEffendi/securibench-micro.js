const { LinkedList } = require("../../lib");

const FIELD_NAME = "name";

const handler = (req, res) => {
  const name = req.query[FIELD_NAME];

  const ll = new LinkedList();
  ll.addLast(name);

  for (const value of ll.iterator()) {
    res.write(value + "\n"); // BAD
  }

  res.end();
};

const getDescription = () => {
  return "test of iterators";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
