const FIELD_NAME = "name";

const handler = async (req, res) => {
  const s = req.query[FIELD_NAME];
  const name = s ? s.toLowerCase() : "";

  res.send(name); // BAD
};

const getDescription = () => {
  return "test query with undefined check";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
