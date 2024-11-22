const FIELD_NAME = "name";

function f(s1, i, res) {
  if (i !== 0) {
    res.write(`${s1}\n`); // BAD
  }
}

const handler = (req, res) => {
  const s1 = req.query[FIELD_NAME];

  for (let i = 0; i < 1500; i++) {
    if (i > 1000 && i < 1200 && i % 7 == 3) {
      f(s1, 1000, res);
    }
  }

  res.end();
};

const getDescription = () => {
  return "interprocedural loop";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
