const FIELD_NAME = "name";

function f(s1, i, res) {
  if (i !== 0) {
    f(s1, i - 1, res);
  } else {
    res.write(`${s1}\n`); // BAD
  }
}

const handler = (req, res) => {
  const s1 = req.query[FIELD_NAME];

  f(s1, 1000, res);

  res.end();
};

const getDescription = () => {
  return "recursive case";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
