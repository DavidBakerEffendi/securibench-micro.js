const FIELD_NAME = "name";

function foo(s1) {
  return id(s1);
}

function bar(string) {
  return id(string);
}

function id(string) {
  return id2(string);
}

function id2(string) {
  return string;
}

const handler = (req, res) => {
  const s1 = req.query[FIELD_NAME];

  const s2 = foo(s1);
  const s3 = bar("abc");

  res.write(`${s2}\n`); // BAD
  res.write(`${s3}\n`); // OK

  res.end();
};

const getDescription = () => {
  return "multi-level context sensitivity test";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
