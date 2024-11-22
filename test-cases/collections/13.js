const { Arrays, LinkedList } = require("../../lib");

const FIELD_NAME = "name";

const handler = (req, res) => {
  const s1 = req.query[FIELD_NAME];
  const c1 = new LinkedList();
  c1.addLast(s1);
  c1.addFirst("x");
  const array = c1.toArray();
  const c2 = Arrays.asList(array);
  const c3 = Arrays.asList(["xyz"]);
  const c4 = Arrays.asList([s1]);

  res.write(`${c2.get(0)}\n`); // OK
  res.write(`${c3.get(0)}\n`); // OK
  res.write(`${c4.get(0)}\n`); // BAD

  res.end();
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
