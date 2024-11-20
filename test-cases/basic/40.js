const FIELD_NAME = "name";

const handler = (req, res) => {
  const name = req.body[FIELD_NAME];
  res.send(name); // BAD
};

const getDescription = () => {
  return "multi-part request test";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
