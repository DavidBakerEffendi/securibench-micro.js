const FIELD_NAME = "name";

const id = (string, res) => {
  res.write(`${string}\n`); // BAD
  return string;
};

const handler = (req, res) => {
  const s1 = req.query[FIELD_NAME];

  const s2 = id(s1, res);
  const s3 = id("abc", res);

  res.write(`${s2}\n`); // BAD
  res.write(`${s3}\n`); // OK

  res.end();
};

const getDescription = () => {
  return "simple id method call";
};

const getVulnerabilityCount = () => {
  return 2;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
