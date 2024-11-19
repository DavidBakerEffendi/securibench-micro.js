const handler = (req, res) => {
  let s1 = req.query["name"];
  let choice = Math.random() < 0.5;

  if (choice) {
    res.write(s1 + ":\n"); // BAD
  } else {
    res.write(s1 + ";\n"); // BAD
  }

  res.write("\n"); // OK
  res.end();
};

const getDescription = () => {
  return "a simple conditional; both branches should be taken";
};

const getVulnerabilityCount = () => {
  return 2;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
