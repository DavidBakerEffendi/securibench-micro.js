const FIELD_NAME = "name";

const handler = (req, res) => {
  const name = req.query[FIELD_NAME];
  req.session["name"] = name;
  const s2 = req.session["name"];

  res.send(s2); // BAD
};

const getDescription = () => {
  return "simple session test";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
