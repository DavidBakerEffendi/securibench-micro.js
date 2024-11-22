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
  c1.setData("abc");

  const c2 = new C();
  c2.setData("def");
  c1.setNext(c2);

  const c3 = new C();
  c3.setData(name.toUpperCase());
  c2.setNext(c3);

  let c = c1;
  while (c !== null) {
    const str = c.getData();
    res.write(`${str}\n`); // BAD
    c = c.next;
  }

  res.end();
};

const getDescription = () => {
  return "nested data in a loop";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
