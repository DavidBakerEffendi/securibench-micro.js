const handler = (req, res) => {
  const s = req.app.locals.config["name"];
  res.send(s); // BAD
};

const getDescription = () => {
  return "direct access to environment variables";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
