const FIELD_NAME = "name";

const handler = (req, res) => {
  const name = req.query[FIELD_NAME]; // Fetch query parameter
  const str = name; // Aliasing

  res.send(str); // BAD: Reflecting user input directly in the response
};

const getDescription = () => {
  return "Simple test of field assignment";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
