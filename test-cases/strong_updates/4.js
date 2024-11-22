const FIELD_NAME = "name";

/* This is really tricky because the field is shared across multiple users of the same servlet.
 * So, depending on the user interaction, we can have a data race with two users accessing field
 * "name". Therefore, when u1 sets it, u1 resets it, u2 sets it, u1 reads it, we can still have a problem.
 * */
let name = null;

const handler = (req, res) => {
  name = req.query[FIELD_NAME];
  name = "abc";

  res.send(name); // BAD
};

const getDescription = () => {
  return "making a shared servlet field thread-local";
};

const getVulnerabilityCount = () => {
  return 0;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
