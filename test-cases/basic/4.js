const handler = (req, res) => {
  let str = req.query["name"];
  let choice = Math.floor(Math.random() * 100) + 1;

  switch (choice) {
    case 1:
      res.end();
      break;
    case 2:
      res.end();
      break;
    case 3:
      res.send(str); // BAD
      break;
    default:
      res.end();
  }
};

const getDescription = () => {
  return "test path sensitivity just a bit";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
