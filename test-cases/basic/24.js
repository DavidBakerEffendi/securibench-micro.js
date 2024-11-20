const FIELD_NAME = "name";

const handler = async (req, res) => {
  const s = req.query[FIELD_NAME];
  const name = s.toLowerCase();

  res.redirect("/user/" + name); // BAD
};

const getDescription = () => {
  return "unsafe redirect";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
