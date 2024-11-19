const handler = (req, res) => {
  let str = req.query["name"];
  let s2 = str.toLowerCase();

  res.send(s2); // BAD
};

const getDescription = () => {
  return "simple derived string test";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
