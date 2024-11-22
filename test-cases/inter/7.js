const FIELD_NAME = "name";

const handler = (req, res) => {
  const name = req.query[FIELD_NAME];

  class Base {
    constructor(value) {
      this.value = value;
      this.foo();
    }

    foo() {
      res.write(`${name}\n`); // BAD
    }

    toString() {
      return this.value;
    }
  }

  class ReflectivelyCreated extends Base {
    constructor(value) {
      super(value);
    }
  }

  new ReflectivelyCreated();

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
