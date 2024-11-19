const FIELD_NAME = "name";

const handler = (req, res) => {
  let name = req.query[FIELD_NAME];
  let n = 15432532;

  let array = new Array(10);
  array[0] = name;

  res.send(array[n - n]); // BAD
};

const getDescription = () => {
  return "a test of array indices";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
