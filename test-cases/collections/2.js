const { LinkedList } = require("../../lib");

const FIELD_NAME = "name";

const handler = (req, res) => {
  const s1 = req.query[FIELD_NAME];
  const ll1 = new LinkedList();
  ll1.addLast(s1);

  const ll2 = new LinkedList();
  ll1.addLast("abc");

  const s2 = ll1.getLast();
  const s3 = ll2.getLast();

  res.write(`${s2}\n`); // BAD
  res.write(`${s3}\n`); // OK

  res.end();
};

const getDescription = () => {
  return "collection deposit/retrieve, check for false positives";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
