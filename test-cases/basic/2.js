const handler = (req, res) => {
  let str = req.query["name"];
  let choice = Math.random() < 0.5;

  if (choice) {
    res.send(str); // BAD
  } else {
    res.end();
  }
};

const getDescription = () => {
  return "XSS combined with a simple conditional";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
