const FIELD_NAME = "name";

const handler = (req, res) => {
  let name = req.query[FIELD_NAME];
  let array = [name, "abc"];

  res.write(array[0]); // BAD
  res.write(array[1]); // OK

  res.end();
};

const getDescription = () => {
  return "test of array initializers";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
