const { ArrayList, LinkedList } = require("../../lib");

const FIELD_NAME = "name";

const handler = (req, res) => {
  const s1 = req.query[FIELD_NAME];
  const c1 = new LinkedList();
  c1.addLast(s1);
  const c2 = new ArrayList();
  c2.add("abc");

  let iter = c1.iterator();
  while (iter.hasNext()) {
    const str = iter.next();
    res.write(`${str}\n`); // BAD
  }

  iter = c2.iterator();
  while (iter.hasNext()) {
    const str = iter.next();
    res.write(`${str}\n`); // OK
  }

  res.end();
};

const getDescription = () => {
  return "more complex collection copying";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
