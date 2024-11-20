const FIELD_NAME = "name";
const fs = require("fs");
const path = require("path");

const handler = async (req, res) => {
  const s = req.query[FIELD_NAME];
  const name = s.toLowerCase();

  try {
    const filePath = path.join(__dirname, name);

    fs.writeFileSync(filePath, "Test content"); // BAD
    fs.createWriteStream(filePath, "utf-8"); // BAD
    fs.createReadStream(filePath, "utf-8"); // BAD

    res.end();
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Internal Server Error");
  }
};

const getDescription = () => {
  return "path traversal";
};

const getVulnerabilityCount = () => {
  return 3;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
