const { MockDatabase } = require("../../lib");

const FIELD_NAME = "name";

const handler = async (req, res) => {
  const name = req.query[FIELD_NAME];
  const db = new MockDatabase();

  try {
    await db.initialize();
    const rows = await db.execute(`SELECT * FROM Users WHERE name='${name}'`); // BAD
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
    res.status(500).send(`Internal server error\nDetails: ${err}`);
  } finally {
    db.close((err) => {
      console.error(err);
    });
  }
};

const getDescription = () => {
  return "simple SQL injection";
};

const getVulnerabilityCount = () => {
  return 1;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
