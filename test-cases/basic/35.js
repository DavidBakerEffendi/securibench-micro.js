const handler = (req, res) => {
  // Comment from Securibench Micro:
  //  I believe these can be forged also
  //  TODO: double-check this
  res.write(`${req.protocol}\n`); // BAD
  res.write(`${req.secure ? "https" : "http"}\n`); // BAD
  res.write(`${req.auth || "none"}\n`); // BAD
  res.write(`${req.originalUrl}\n`); // BAD
  res.write(`${req.user}\n`); // BAD
  res.write(`${req.protocol}://${req.get("host")}${req.originalUrl}\n`); // BAD

  res.end();
};

const getDescription = () => {
  return "values obtained from express.Request";
};

const getVulnerabilityCount = () => {
  return 6;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
