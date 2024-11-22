const { Arrays, LinkedList } = require("../../lib");

const FIELD_NAME = "name";

const handler = (req, res) => {
  const s1 = req.query[FIELD_NAME];
  const c = new LinkedList();

  for (let i = 0; i < 3000; i++) {
    c.addFirst("i: " + i);
  }
  c.addLast(s1);

  res.send(c.getLast()); // BAD
};

const getDescription = () => {
  return "more complex collection copying through an array";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
