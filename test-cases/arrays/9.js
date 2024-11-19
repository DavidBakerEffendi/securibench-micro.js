const FIELD_NAME = "name";

const handler = (req, res) => {
  let name = req.query[FIELD_NAME];
  let array = Array.from({ length: 3 }, () => Array(5).fill(null));
  array[0][0] = name;

  res.send(array[0][0]); // BAD
};

const getDescription = () => {
  return "multidimentional arrays";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
