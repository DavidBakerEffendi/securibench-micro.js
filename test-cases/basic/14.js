const handler = (req, res) => {
  Object.values(process.env).forEach((v) => res.write(`${v}\n`)); // BAD

  res.end();
};

const getDescription = () => {
  return "use process.env to reflect environment variable names";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
