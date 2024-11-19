const FIELD_NAME = "name";

const handler = (req, res) => {
  let s1 = req.query[FIELD_NAME];
  let array = new Array(10);
  array[0] = s1;

  res.send(array[0]); // BAD
};

const getDescription = () => {
  return "a simple array test";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
