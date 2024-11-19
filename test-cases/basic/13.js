const handler = (req, res) => {
  let s = process.env["name"] || "Environment variable not set";

  res.send(s); // BAD
};

const getDescription = () => {
  return "use process.env to fetch environment variables";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
