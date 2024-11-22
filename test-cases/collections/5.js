const { ArrayList } = require("../../lib");

const FIELD_NAME = "name";

const handler = (req, res) => {
  const name = req.query[FIELD_NAME];
  const ll = new ArrayList();
  ll.add(name);

  const iter = ll.iterator();
  while (iter.hasNext()) {
    const o = iter.next();
    res.write(o + "\n"); // BAD
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
