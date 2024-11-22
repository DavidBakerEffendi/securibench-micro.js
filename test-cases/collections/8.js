const { ArrayList, LinkedList } = require("../../lib");

const FIELD_NAME = "name";

const handler = (req, res) => {
  const s1 = req.query[FIELD_NAME];
  const c1 = new LinkedList();
  c1.addLast(s1);
  const c2 = new ArrayList();
  c2.add("abc");
  c2.addAll(c1);
  const s2 = c2.get(0);

  res.send(s2); // OK
};

const getDescription = () => {
  return "collection copying";
};

const getVulnerabilityCount = () => {
  return 0;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
