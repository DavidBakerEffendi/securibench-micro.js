const express = require("express");
const cookieParser = require("cookie-parser");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });
const app = express();
app.use(cookieParser());
const PORT = 3000;

// Example config object (similar to the servlet context's init parameters)
const config = {
  name: "value1",
  param2: "value2",
  param3: "value3",
};

// Store the config in app.locals (similar to ServletContext attributes)
app.locals.config = config;

const loadTestCases = (app, baseDir) => {
  const testCasesDir = path.join(__dirname, baseDir);

  fs.readdirSync(testCasesDir, { withFileTypes: true }).forEach((entry) => {
    if (entry.isDirectory()) {
      const subDir = path.join(baseDir, entry.name);

      fs.readdirSync(path.join(__dirname, subDir)).forEach((file) => {
        const testCasePath = path.join(subDir, file);

        if (file.endsWith(".js")) {
          const category = subDir
            .replace(/\\/g, "/")
            .replace(/test-cases\//, "");
          const testNumber = path.basename(file, ".js");
          const routePath = `/${category}/${testNumber}`;
          const testCase = require(path.join(__dirname, testCasePath));

          if (category === "basic" && testNumber === "40") {
            app.post(routePath, upload.none(), testCase.handler);
          } else {
            app.get(routePath, testCase.handler);
          }

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
