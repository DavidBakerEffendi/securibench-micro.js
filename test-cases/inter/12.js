const { LinkedList } = require("../../lib");

const FIELD_NAME = "name";

const COLLECTION1 = new LinkedList();
const COLLECTION2 = new LinkedList();

function foo(s) {
  COLLECTION2.add(s);
}

function bar(s) {
  COLLECTION1.add(s);
}

const handler = (req, res) => {
  const s1 = req.query[FIELD_NAME];

  foo("abc");
  bar(s1);

  const s2 = COLLECTION1.iterator().next();
  const s3 = COLLECTION2.iterator().next();

  res.write(`${s2}\n`); // BAD
  res.write(`${s3}\n`); // OK

  res.end();
};

const getDescription = () => {
  return "collection as a static field";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
