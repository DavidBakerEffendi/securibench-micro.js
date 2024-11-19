const handler = (req, res) => {
  let s1 = req.query["name"];
  let choice = Math.random() < 0.5;
  let s2 = s1;
  let s3 = s2;
  // let s4 = s1;
  let s5 = choice ? s3 : s2;
  let s6 = s5;

  res.send(s6); // BAD
};

const getDescription = () => {
  return "chains of value assignments";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
