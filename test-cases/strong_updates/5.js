const FIELD_NAME = "name";

let nameLock = false;
let name = null;

function synchronize() {
  return new Promise((resolve) => {
    const checkLock = () => {
      if (!nameLock) {
        resolve();
      } else {
        setTimeout(checkLock, 10);
      }
    };
    checkLock();
  });
}

const handler = (req, res) => {
  synchronize()
    .then(() => {
      nameLock = true;
      name = req.query[FIELD_NAME];
      name = "abc";
      res.send(name); // OK
    })
    .finally(() => (nameLock = false));
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
