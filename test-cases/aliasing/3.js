const FIELD_NAME = "name";

const handler = (req, res) => {
  let name = req.query[FIELD_NAME];
  let a = new Array(10);
  let str = a[5];
  a[5] = name;
  name = str;

  res.send(str); // BAD
};

const getDescription = () => {
  return "simple aliasing of an array element";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
