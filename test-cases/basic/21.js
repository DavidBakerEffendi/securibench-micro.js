const { MockDatabase } = require("../../lib");

const FIELD_NAME = "name";

const handler = async (req, res) => {
  const name = req.query[FIELD_NAME];
  const db = new MockDatabase();

  try {
    await db.initialize();
    await db.executeUpdate(`SELECT * FROM Users WHERE name='${name}'`); // BAD
    await db.executeUpdate(`SELECT * FROM Users WHERE name='${name}'`, 0); // BAD
    await db.executeUpdate(
      `SELECT * FROM Users WHERE name='${name}'`,
      new Array(0),
    ); // BAD
    await db.executeQuery(`SELECT * FROM Users WHERE name='${name}'`); // BAD
    res.status(200);
    res.end();
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
  return "SQL injection with less commonly used methods";
};

const getVulnerabilityCount = () => {
  return 4;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
