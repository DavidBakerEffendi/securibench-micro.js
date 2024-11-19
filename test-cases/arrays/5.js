const FIELD_NAME = "name";

const handler = (req, res) => {
  let name = req.query[FIELD_NAME];
  let array = new Array(10);

  array[0] = name;
  array[0] = "abc";

  res.send(array[0]); // OK
};

const getDescription = () => {
  return "strong updates to array elements";
};

const getVulnerabilityCount = () => {
  return 0;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
