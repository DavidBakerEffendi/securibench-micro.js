const { StringBuffer } = require("../../lib");

const handler = (req, res) => {
  let s1 = req.query["name"];
  let s2 = s1;
  let s3 = s2;
  let s4 = s3;
  let b1 = new StringBuffer(s4);
  // let b2 = b1;
  let b3 = b1;
  let s5 = b3.toString();
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
