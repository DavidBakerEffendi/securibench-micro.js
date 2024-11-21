const FIELD_NAME = "name";

const handler = (req, resp) => {
  const s = req.query[FIELD_NAME];
  const name = s.toLowerCase();
  const enc = encodeURIComponent(`/user/${name}`);
  const dec = decodeURIComponent(enc);

  resp.sendRedirect(dec); /* BAD */
  resp.sendRedirect(enc); /* OK */
};

const getDescription = () => {
  return "encode and then decode";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
