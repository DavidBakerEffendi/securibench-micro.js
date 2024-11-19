const handler = (req, res) => {
  let str = req.query["name"];
  let bs = Array(10).fill(false);
  if (bs[0]) {
    if (bs[1]) {
      if (bs[2]) {
        if (bs[3]) {
          if (bs[4]) {
          }
        } else {
          res.send(str); // BAD
        }
      }
    }
  }
};

const getDescription = () => {
  return "test of complex conditionals";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
