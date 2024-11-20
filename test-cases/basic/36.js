const handler = (req, res) => {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    const lines = body.split("\n");
    const firstLine = lines[0];

    res.send(`${firstLine}\n`); // BAD
  });
};

const getDescription = () => {
  return "values obtained from express.Request input stream";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
