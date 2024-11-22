const FIELD_NAME = "name";

const handler = (req, res) => {
  function f1(name) {
    f2(name);
  }

  function f2(name) {
    f3(name);
    f3("ade".concat(name));
  }

  function f3(name) {
    f4(name);
  }

  function f4(name) {
    f5(name);
  }

  function f5(name) {
    f6(name);
  }

  function f6(name) {
    f7(name);
    f7(name + "abc");
    f8("adsf " + name + "abc");
    f8("adsf " + name + "abc");
  }

  function f7(name) {
    f8(name);
  }

  function f8(name) {
    f9(name);
  }

  // reachable code
  function f9(name) {
    res.write(`${name}\n`); // BAD
  }

  // dead code
  function f0(name) {
    res.write(`${name}\n`); // OK
  }

  function id(string, res) {
    res.write(`${string}\n`); // OK

    return string;
  }

  const name = req.query[FIELD_NAME];

  f1(name);
  res.end();
};

const getDescription = () => {
  return "chains of method calls";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
