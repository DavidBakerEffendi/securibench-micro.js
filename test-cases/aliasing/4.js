const FIELD_NAME = "name";

const handler = (req, res) => {
  let name = req.query[FIELD_NAME];
  let o1 = name;
  let o2 = name.concat("abc");
  let o3 = "anc";

  res.write(`${o1}\n`); // BAD
  res.write(`${o2}\n`); // BAD
  res.write(`${o3}\n`); // OK

  res.end();
};

const getDescription = () => {
  return "simple aliasing with casts";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
