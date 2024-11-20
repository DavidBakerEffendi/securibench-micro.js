const handler = (req, res) => {
  const cookies = Object.entries(req.cookies);
  const [name, value] = cookies[0];
  const writer = res;

  if (name) {
    writer.write(`Name: ${name}\n`); // BAD
  }
  if (value) {
    writer.write(`Value: ${value}\n`); // BAD
  }
  // Express.js cookies don't have anything more than 'name'
  // and 'value' so we cannot recreate the 'comment' part

  writer.end();
};

const getDescription = () => {
  return "values obtained from cookies";
};

const getVulnerabilityCount = () => {
  return 2;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
