const FIELD_NAME = "name";

const handler = (req, res) => {
  let name = req.query[FIELD_NAME];
  let array = new Array(10);

  array[0] = "abc";
  array[0] = name;

  res.send(array[0]); // BAD
};

const getDescription = () => {
  return "strong updates to array elements";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
