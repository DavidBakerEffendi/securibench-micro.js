const FIELD_NAME = "name";

const handler = (req, res) => {
  const name = req.query[FIELD_NAME];

  let d = new Data();
  d.value2 = name;
  d.value1 = "abc";

  res.write(`${d.value1}\n`); // OK
  res.write(`${d.value2}\n`); // BAD

  res.end();
};

class Data {
  constructor() {
    this.value1 = undefined;
    this.value1 = undefined;
  }
}

const getDescription = () => {
  return "field sensitivity";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
