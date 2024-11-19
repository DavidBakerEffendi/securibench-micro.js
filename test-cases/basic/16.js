const FIELD_NAME = "name";

const handler = (req, res) => {
  let s = req.query[FIELD_NAME];
  let w = new Widget();
  w.setContents(s);

  res.send(w.getContents()); // BAD
};

class Widget {
  constructor() {
    this.contents = undefined;
  }

  setContents(string) {
    this.contents = string;
  }

  getContents() {
    return this.contents;
  }
}

const getDescription = () => {
  return "simple heap-allocated data strucure";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
