const FIELD_NAME = "name";
const fs = require("fs");
const path = require("path");

const handler = async (req, res) => {
  const s = req.query[FIELD_NAME];
  const name = s.toLowerCase();

  // this is not a problem just yet: it's perhaps okay to create a file file
  // a tainted filename, but not use it in any way
  const filePath = path.join(__dirname, name);
  // this is definitely bad; an error should be flagged either on this or the
  // previous line
  fs.open(filePath, "w", (_err, _fd) => {}); // BAD
  res.end();
};

const getDescription = () => {
  return "basic path traversal";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
