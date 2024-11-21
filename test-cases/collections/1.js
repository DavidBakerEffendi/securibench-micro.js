const { LinkedList } = require("../../lib");

const FIELD_NAME = "name";

const handler = (req, res) => {
  const s1 = req.query[FIELD_NAME];

  const ll = new LinkedList();
  ll.addLast(s1);
  const s2 = ll.getLast();

  res.send(s2); // BAD
};

const getDescription = () => {
  return "simple collection deposit/retrieve";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
