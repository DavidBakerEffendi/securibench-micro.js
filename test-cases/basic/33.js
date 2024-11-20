const handler = (req, res) => {
  const acceptLanguage = req.get("Accept-Language");

  const headers = acceptLanguage ? acceptLanguage.split(",") : [];

  headers.forEach((header) => {
    res.write(`${header.trim()}\n`); // BAD
  });

  res.end();
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
