const { LinkedList } = require("../../lib");
const Collections11b = require("./lib/11b");

const FIELD_NAME = "name";

const handler = (req, res) => {
  const s1 = req.query[FIELD_NAME];
  const c1 = new LinkedList();
  c1.addLast(s1);

  const c11b = new Collections11b();
  c11b.foo(c1, res);
};

const getDescription = () => {
  return "interprocedural collection passing";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
