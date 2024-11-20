const FIELD_NAME = "name";

const handler = async (req, res) => {
  const params = req.query;

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const value = params[key];

      if (key === FIELD_NAME) {
        res.write(`${value}\n`); // BAD
      }
    }
  }

  res.end();
};

const getDescription = () => {
  return "test req.query as map";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
