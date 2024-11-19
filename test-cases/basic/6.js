const handler = (req, res) => {
  let s1 = req.query["name"];
  let s2 = s1.toUpperCase();
  let s3 = s2.concat(";");
  let s4 = s3.replace(";", ".");
  let s5 = ":" + s4 + ":";
  let s6 = s5.substring(s5.length - 1);

  res.send(s6); // BAD
};

const getDescription = () => {
  return "complex test of derived strings";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
