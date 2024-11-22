const FIELD_NAME = "name";

const handler = (req, res) => {
  const name = req.query[FIELD_NAME];
  const m = new Map();
  m.set("a", name);
  const s1 = m.get("b");
  const s2 = m.get("a");

  res.write(s1 + "\n"); // OK
  res.write(s2 + "\n"); // BAD

  res.end();
};

const getDescription = () => {
  return "test of maps";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
