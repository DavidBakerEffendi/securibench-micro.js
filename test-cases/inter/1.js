const FIELD_NAME = "name";

const id = (string) => {
  return string;
};

const handler = (req, res) => {
  const s1 = req.query[FIELD_NAME];

  const s2 = id(s1);
  const s3 = id("abc");

  res.write(`${s2}\n`); // BAD
  res.write(`${s3}\n`); // OK

  res.end();
};

const getDescription = () => {
  return "simple id method call";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
