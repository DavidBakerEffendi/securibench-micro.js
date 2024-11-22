const FIELD_NAME = "name";

function foo(s1) {
  return s1.toLowerCase();
}

function bar(s1) {
  return s1.toLowerCase();
}

const handler = (req, res) => {
  const s1 = req.query[FIELD_NAME];

  const s2 = foo(s1);
  const s3 = foo("abc");

  res.write(`${s2}\n`); // BAD
  res.write(`${s3}\n`); // OK

  const s4 = bar(s1);
  const s5 = bar("abc");

  res.write(`${s4}\n`); // BAD
  res.write(`${s5}\n`); // OK

  res.end();
};

const getDescription = () => {
  return "simple object sensitivity";
};

const getVulnerabilityCount = () => {
  return 2;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
