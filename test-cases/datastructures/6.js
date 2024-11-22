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
  let c = new C();
  const head = c;

  for (let i = 0; i < 1600; i++) {
    const next = new C();
    c.setNext(next);
    c = next;
  }
  c.setData(name);
  c = head;

  while (c !== null) {
    const str = c.getData();
    res.write(`${c.getData()}\n`); // BAD
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
