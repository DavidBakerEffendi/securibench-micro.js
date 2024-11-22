const FIELD_NAME = "name";

const handler = (req, res) => {
  const name = req.query[FIELD_NAME];

  class ReflectivelyCreated {
    static {
      res.write(`${name}\n`); // BAD
    }
  }

  try {
    ReflectivelyCreated;
  } catch (error) {
    console.error("Error:", error);
  }

  res.end();
};

const getDescription = () => {
  return "bug in class initializer";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};