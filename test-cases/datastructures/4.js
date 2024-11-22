const FIELD_NAME = "name";

class C {
  constructor() {
    this.str = null;
    this.next = null;
  }

  getData() {
    return this.str;
  }

  setNext(next) {
    this.next = next;
  }

  setData(str) {
    this.str = str;
  }
}

const handler = (req, res) => {
  const name = req.query[FIELD_NAME];
  const c1 = new C();
  c1.setData(name);

  const c2 = new C();
  c2.setData("abc");
  c1.setNext(c2);

  const str = c1.next.str;

  res.send(str); // OK
};

const getDescription = () => {
  return "simple nested data (false positive)";
};

const getVulnerabilityCount = () => {
  return 0;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
