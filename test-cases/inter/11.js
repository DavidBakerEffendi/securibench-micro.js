const FIELD_NAME = "name";

function id(string) {
  return string;
}

function foo(s1) {
  return s1.toUpperCase();
}

const handler = (req, res) => {
  const s1 = req.query[FIELD_NAME];

  const s2 = id(foo(s1));
  const s3 = id(foo("abc"));

  res.write(`${s2}\n`); // BAD
  res.write(`${s3}\n`); // OK

  res.end();
};

const getDescription = () => {
  return "object sensitivity and context sensitivity combined";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
