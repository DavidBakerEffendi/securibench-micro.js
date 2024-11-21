const { LinkedList } = require("../../lib");

const FIELD_NAME = "name";

const handler = (req, res) => {
  const s1 = req.query[FIELD_NAME];
  const ll1 = new LinkedList();
  const ll2 = new LinkedList();
  ll2.addLast(s1);
  ll2.addLast(ll1);

  const c = ll2.getLast();
  const s2 = c.getLast();

  res.write(`${s2}\n`); // BAD
  res.write(`${c}\n`); // BAD

  res.end();
};

const getDescription = () => {
  return "collection of collections";
};

const getVulnerabilityCount = () => {
  return 2;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
