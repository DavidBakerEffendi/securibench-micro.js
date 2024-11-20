const FIELD_NAME = "name";

const handler = (req, res) => {
  let s = req.query[FIELD_NAME];

  for (let i = 0; i < 100; i++) {
    if (i > 5 && i % 17 === 0) {
      res.write(`${s}\n`); // BAD
    }
  }

  res.end();
};

const getDescription = () => {
  return "protect against simple loop unrolling";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
