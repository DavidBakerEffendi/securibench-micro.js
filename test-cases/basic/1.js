const handler = (req, res) => {
  let str = req.query["name"];

  res.send(str); // BAD
};

const getDescription = () => {
  return "very simple XSS";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
