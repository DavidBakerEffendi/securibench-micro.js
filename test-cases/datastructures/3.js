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
  c1.setData("anbc");

  const c2 = new C();
  c2.setData(name);
  c1.setNext(c2);

  const str = c1.next.str;

  res.send(str); // BAD
};

const getDescription = () => {
  return "simple nested data";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
