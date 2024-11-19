const FIELD_NAME = "name";

const handler = (req, res) => {
  let s1 = req.query[FIELD_NAME];
  let array1 = new Array(10);
  let array2 = new Array(10);

  array1[0] = s1;
  array2[0] = "abc";

  res.write(`${array1[0]}\n`); // BAD
  res.write(`${array2[1]}\n`); // OK

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
