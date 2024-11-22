const FIELD_NAME = "name";

const handler = (req, res) => {
  class Reflection {
    constructor() {
      this.name = req.query[FIELD_NAME];
    }

    f(res) {
      try {
        console.log(typeof this[FIELD_NAME]);
        if (this.hasOwnProperty(FIELD_NAME)) {
          const myName = this[FIELD_NAME];
          res.write(`${myName}\n`); // BAD
        } else {
          throw new Error(`Field '${FIELD_NAME}' not found`);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  }

  new Reflection().f(res);

  res.end();
};

const getDescription = () => {
  return "reflectively access a field";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
