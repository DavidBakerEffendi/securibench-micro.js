const { LinkedList } = require("../../lib");

const FIELD_NAME = "name";

const handler = (req, res) => {
  const s1 = req.query[FIELD_NAME];
  const c1 = new LinkedList();
  c1.addLast(s1);
  const array = c1.toArray();
  res.send(array[0]); // BAD
};

const getDescription = () => {
  return "collection copying through an array";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
