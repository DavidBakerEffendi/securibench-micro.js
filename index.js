const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

const loadTestCases = (app, baseDir) => {
  const testCasesDir = path.join(__dirname, baseDir);

  fs.readdirSync(testCasesDir, { withFileTypes: true }).forEach((entry) => {
    if (entry.isDirectory()) {
      const subDir = path.join(baseDir, entry.name);

      fs.readdirSync(path.join(__dirname, subDir)).forEach((file) => {
        const testCasePath = path.join(subDir, file);

        if (file.endsWith(".js")) {
          const routePath = `/${subDir.replace(/\\/g, "/").replace(/test-cases\//, "")}/${path.basename(file, ".js")}`;
          const testCase = require(path.join(__dirname, testCasePath));

          app.get(routePath, testCase.handler);
          console.log(`Loaded test case: ${routePath}`);
        }
      });
    }
  });
};

// Load test cases into the Express app
loadTestCases(app, "test-cases");

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
