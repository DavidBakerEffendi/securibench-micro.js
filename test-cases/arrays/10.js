const handler = (req, res) => {
  let name = req.query["name"];
  let array = Array.from({ length: 3 }, () => Array(5).fill(null));
  array[0] = [name, "abc"];

  res.write(`${array[0][0]}\n`); // BAD
  res.write(`${array[0][2]}\n`); // OK

  res.end();
};

const getDescription = () => {
  return "complex multidimentional array test";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
