const handler = (req, res) => {
  const headers = req.headers;

  for (const headerName in headers) {
    if (headers.hasOwnProperty(headerName)) {
      const headerValue = headers[headerName];
      // Comment from Securibench Micro:
      //  I believe arbitrary header names can be forged
      //  TODO: double-check this
      res.write(`${headerName}\n`); // BAD
      res.write(`${headerValue}\n`); // BAD
    }
  }

  res.end();
};

const getDescription = () => {
  return "values obtained from headers";
};

const getVulnerabilityCount = () => {
  return 2;
};

module.exports = {
  handler,
  getDescription,
  getVulnerabilityCount,
};
