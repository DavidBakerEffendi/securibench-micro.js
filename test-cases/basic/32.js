const handler = (req, res) => {
  const header = req.get("Accept-Language");
  res.send(header); // BAD
};

const getDescription = () => {
  return "values obtained from headers";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
