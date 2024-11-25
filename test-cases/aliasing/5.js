const FIELD_NAME = "name";

const handler = (req, res) => {
  const buf = ["abc"];
  foo(buf, buf, res, req);
};

const foo = (buf1, buf2, res, req) => {
  const name = req.query[FIELD_NAME];
  buf1.push(name);
  res.send(buf2.join("")); // BAD
};

const getDescription = () => {
  return "interprocedural argument aliasing";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
