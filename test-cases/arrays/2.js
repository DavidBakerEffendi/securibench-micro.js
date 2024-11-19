const FIELD_NAME = "name";

const handler = (req, res) => {
  let s1 = req.query[FIELD_NAME];
  let array = new Array(10);
  array[0] = s1;

  res.write(array[0]); // BAD
  res.write(array[1]); // OK
  res.write(array[2]); // OK

  res.end();
};

const getDescription = () => {
  return "a more complex array test";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
