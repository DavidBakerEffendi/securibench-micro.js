const { StringBuffer } = require("../../lib");

const FIELD_NAME = "name";

const handler = (req, res) => {
  let s1 = req.query[FIELD_NAME];
  let o = s1 + ";";
  let s2 = o.toString(); // Cast object to string (implicitly handled by JavaScript)

  let buf = new StringBuffer(s2);
  let o2 = buf;

  let s3 = o2.toString();

  res.send(s3);
};

const getDescription = () => {
  return "test casts more exhaustively";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
