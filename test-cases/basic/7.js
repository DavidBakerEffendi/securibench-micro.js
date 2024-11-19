const handler = (req, res) => {
  let s1 = req.query["name"];
  let s2 = s1.toUpperCase();
  let buf = `${s2}abcdefgh`;
  buf = buf.slice(0, 3) + "s" + buf.slice(3);
  let s3 = buf.toString();

  res.send(s3); // BAD
};

const getDescription = () => {
  return "complex test of derived strings involving a string buffer";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
