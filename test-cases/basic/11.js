const handler = (req, res) => {
  let s1 = req.query["name"];
  let s2 = "abc";
  let s3 = s1.toUpperCase();
  let s4 = s2.toUpperCase();

  res.write(`${s3}\n`); // BAD
  res.write(s1 + ";\n"); // BAD
  res.write(`${s4}\n`); // OK

  res.end();
};

const getDescription = () => {
  return "a simple false positive because of two calls to String.toUpperCase";
};

const getVulnerabilityCount = () => {
  return 2;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
