const FIELD_NAME = "name";

const handler = (req, res) => {
  let s = req.query[FIELD_NAME];
  let w1 = new Widget();
  w1.setContents(s);

  let w2 = new Widget();
  w2.setContents("abc");

  res.send(w1.getContents()); // BAD
  res.send(w2.getContents()); // OK
};

class Widget {
  constructor() {
    this.contents = undefined;
  }

  setContents(contents) {
    this.contents = contents;
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
