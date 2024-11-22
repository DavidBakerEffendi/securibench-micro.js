const FIELD_NAME = "name";

const handler = (req, res) => {
  const name = req.query[FIELD_NAME];

  class ReflectivelyCreated {
    constructor() {
      this.value = null;
    }
  }

  try {
    const clazz = ReflectivelyCreated;
    const rc = Reflect.construct(clazz, []);
    rc["value"] = name;
    res.write(`${rc.value}\n`); // BAD
  } catch (error) {
    console.error("Error:", error);
  }

  res.end();
};

const getDescription = () => {
  return "reflectively create a class and access its field";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
