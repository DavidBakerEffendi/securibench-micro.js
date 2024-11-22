const FIELD_NAME = "name";

class C {
  constructor() {
    this.str = null;
    this.tag = "abc";
  }

  getData() {
    return this.str;
  }

  getTag() {
    return this.str;
  }

  setData(str) {
    this.str = str;
  }
}

const handler = (req, res) => {
  const name = req.query[FIELD_NAME];
  const c = new C();
  c.setData(name);
  const str = c.getData();
  const tag = c.getTag();

  res.write(str + "\n"); // BAD
  res.write(tag + "\n"); // BAD

  res.end();
};

const getDescription = () => {
  return "simple test of field assignment";
};

const getVulnerabilityCount = () => {
  return 2;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
