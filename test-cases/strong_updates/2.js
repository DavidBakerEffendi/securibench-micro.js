const FIELD_NAME = "name";

const handler = (req, res) => {
  let name = req.query[FIELD_NAME];
  name = "abc";

  res.send(name); // OK
};

const getDescription = () => {
  return "simple test of strong updates"; // this is a duplicate test case in the original too
};

const getVulnerabilityCount = () => {
  return 0;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
