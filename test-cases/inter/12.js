const FIELD_NAME = "name";

const COLLECTION1 = [];
const COLLECTION2 = [];

function foo(s) {
  COLLECTION2.push(s);
}

function bar(s) {
  COLLECTION1.push(s);
}

const handler = (req, res) => {
  const s1 = req.query[FIELD_NAME];

  foo("abc");
  bar(s1);

  const s2 = COLLECTION1[0];
  const s3 = COLLECTION2[0];

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
