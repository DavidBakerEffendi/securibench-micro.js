const handler = (req, res) => {
  let s1 = req.query["name"];
  let s2 = s1.toUpperCase();
  let s3 = s2.concat(";");
  let s4 = s3.replace(";", ".");
  let s5 = s4.trim();

  res.write(`${s3}\n`); // BAD
  res.write(`${s4}\n`); // BAD
  res.write(`${s5}\n`); // BAD

  res.end();
};

const getDescription = () => {
  return "moderately complex test of derived strings";
};

const getVulnerabilityCount = () => {
  return 3;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
