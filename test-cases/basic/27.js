const FIELD_NAME = "name";

const handler = async (req, res) => {
  const params = req.query;

  const iterator = params.keys();
  let next = iterator.next();
  while (!next.done) {
    const name = next.value;
    if (name === FIELD_NAME) {
      const value = params.get(name);
      res.send(`value: ${value}\n`); // BAD
    }
    next = iterator.next();
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
