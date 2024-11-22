const FIELD_NAME = "name";

function id(_in) {
  return _in.toLowerCase();
}

const handler = (req, res) => {
  const name = req.query[FIELD_NAME];

  const s1 = id(name);
  const s2 = id("abc");

  res.write(`${s1}\n`); // BAD
  res.write(`${s2}\n`); // OK
  res.end();
};

const getDescription = () => {
  return "store stuff in a field";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
