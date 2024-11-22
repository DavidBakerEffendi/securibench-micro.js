const FIELD_NAME = "name";

const handler = (req, res) => {
  const s1 = req.query[FIELD_NAME];

  class Reflection {
    id(string, res) {
      return string;
    }

    foo() {
      try {
        const methodName = "id";
        if (typeof this[methodName] === "function") {
          const method = this[methodName];
          const o = method.call(this, s1, res);
          const s2 = o.toString();
          res.write(`${s2}\n`); // BAD
        } else {
          throw new Error(`Method ${methodName} not found`);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  }

  new Reflection().foo();

  res.end();
};

const getDescription = () => {
  return "reflective call of a method";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
