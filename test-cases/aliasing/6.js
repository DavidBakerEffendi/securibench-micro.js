const FIELD_NAME = "name";

const handler = (req, res) => {
  const names = req.query[FIELD_NAME]?.split(",") || []; // Simulates req.getParameterValues (splitting comma-separated values)

  // Create aliasing for the first element in names array
  let o1,
    o2,
    o3,
    o4,
    o5,
    o6,
    o7,
    o8,
    o9,
    o10,
    o11,
    o12,
    o13,
    o14,
    o15,
    o16,
    o17,
    o18,
    o19,
    o20,
    o21,
    o22,
    o23,
    o24,
    o25,
    o26,
    o27,
    o28,
    o29,
    o30,
    o31,
    o32,
    o33,
    o34,
    o35,
    o36,
    o37,
    o38,
    o39,
    o40;

  o1 =
    o2 =
    o3 =
    o4 =
    o5 =
    o6 =
    o7 =
    o8 =
    o9 =
    o10 =
    o11 =
    o12 =
    o13 =
    o14 =
    o15 =
    o16 =
    o17 =
    o18 =
    o19 =
    o20 =
    o21 =
    o22 =
    o23 =
    o24 =
    o25 =
    o26 =
    o27 =
    o28 =
    o29 =
    o30 =
    o31 =
    o32 =
    o33 =
    o34 =
    o35 =
    o36 =
    o37 =
    o38 =
    o39 =
    o40 =
      names[0];

  res.write(`${o1}\n`); // BAD
  res.write(`${o2}\n`); // BAD
  res.write(`${o3}\n`); // BAD
  res.write(`${o4}\n`); // BAD
  res.write(`${o32}\n`); // BAD
  res.write(`${o37}\n`); // BAD
  res.write(`${o40}\n`); // BAD

  res.end();
};

const getDescription = () => {
  return "Aliasing with copy propagation";
};

const getVulnerabilityCount = () => {
  return 7;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
