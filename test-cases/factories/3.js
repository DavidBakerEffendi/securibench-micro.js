const FIELD_NAME = "name";

class StringWrapper {
  constructor(value) {
    this.value = value;
  }
  toString() {
    return this.value;
  }
}

const handler = (req, res) => {
  const s1 = req.query[FIELD_NAME];

  const w1 = new StringWrapper(s1);
  const w2 = new StringWrapper("abc");

  res.write(`${w1.toString()}\n`); // BAD
  res.write(`${w2.toString()}\n`); // OK

  res.end();
};

const getDescription = () => {
  return "factory problem with a string wrapper";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
