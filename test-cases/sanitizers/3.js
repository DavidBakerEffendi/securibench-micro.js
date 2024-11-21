const FIELD_NAME = "name";

const handler = (req, res) => {
  const s = req.query[FIELD_NAME];
  const name = s.toLowerCase();

  res.redirect("/user/" + encodeURI(name)); // OK
};

const getDescription = () => {
  return "safe redirect";
};

const getVulnerabilityCount = () => {
  return 0;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
