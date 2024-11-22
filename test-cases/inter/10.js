const FIELD_NAME = "name";

function foo(s1) {
  return s1.toLowerCase().substring(0, s1.length - 1);
}

const handler = (req, res) => {
  const s1 = req.query[FIELD_NAME];

  const s2 = foo(s1);
  const s3 = foo("abc");

  res.write(`${s2}\n`); // BAD
  res.write(`${s3}\n`); // OK

  res.end();
};

const getDescription = () => {
  return "more complex object sensitivity";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
