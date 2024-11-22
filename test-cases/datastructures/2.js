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
  const c1 = new C();
  c1.setData("def");

  const c2 = new C();
  c2.setData(name);

  const str1 = c1.getData();
  const str2 = c2.getTag();

  res.write(str1 + "\n"); // OK
  res.write(str2 + "\n"); // BAD

  res.end();
};

const getDescription = () => {
  return "multiple objects of the same type";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
