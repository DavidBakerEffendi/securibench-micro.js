const FIELD_NAME = "name";

const handler = (req, res) => {
  const name = req.query[FIELD_NAME];
  const tok1 = name.split("\t");
  const tok2 = ["abc", "def"];

  let i = 0;
  while (i < tok1.length && i < tok2.length) {
    res.write(`${tok1[i]}\n`); // BAD
    res.write(`${tok2[i]}\n`); // OK
    i++;
  }

  res.end();
};

const getDescription = () => {
  return "tokenizing string test with false positive";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
