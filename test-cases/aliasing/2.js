const FIELD_NAME = "name";

const handler = (req, res) => {
  let name = req.query[FIELD_NAME];
  let str = "abc";
  name = str;

  res.send(str); // OK
};

const getDescription = () => {
  return "simple aliasing false positive";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
