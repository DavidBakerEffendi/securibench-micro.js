const FIELD_NAME = "name";

const handler = (req, res) => {
  const name = req.query[FIELD_NAME];

  let head = new Node();
  let next = new Node();
  head.next = next;
  next.value = name;

  res.write(`${next.value}\n`); // BAD
  res.write(`${head.next.value}\n`); // BAD
  res.write(`${head.value}\n`); // OK

  res.end();
};

class Node {
  constructor() {
    this.value = undefined;
    this.next = null;
  }
}

const getDescription = () => {
  return "recursive data structures";
};

const getVulnerabilityCount = () => {
  return 2;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
