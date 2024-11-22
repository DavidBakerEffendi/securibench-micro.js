const FIELD_NAME = "name";

class Widget {
  constructor() {
    value = null;
  }
}

const handler = (req, res) => {
  let name = req.query[FIELD_NAME];
  const w = new Widget();
  w.value = name;
  w.value = "abc";

  res.send(w.value); // OK
};

const getDescription = () => {
  return "strong updates in data structures";
};

const getVulnerabilityCount = () => {
  return 0;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
