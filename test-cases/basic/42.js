const handler = (req, res) => {
  const context = req.app.locals;
  const keys = Object.keys(context.config);

  keys.forEach((key) => {
    const value = context.config[key];
    res.write(value + "\n"); // BAD
  });

  res.end();
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
