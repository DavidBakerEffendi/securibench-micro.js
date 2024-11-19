# Securibench Micro.js

A [Securibench Micro](https://github.com/too4words/securibench-micro/tree/master) v1.08 inspired program analysis benchmark for server-side JavaScript. This uses [Express.js](https://expressjs.com) as the server-side framework.

All test cases can be found under `test-cases` and each test case endpoint matches the directory structure, e.g., `test-cases/aliasing/1.js` can be pinged at `localhost:3000/aliasing/1`.

To start:

```
npm install
npm start
```

_NB_: This repository attempts to recreate the original in JavaScript exactly, and this includes the test outcomes, whether one could argue that they are true vulnerabilities or not. We value consistency between the two repositories. However, some typos and incorrect vulnerability counts are fixed.
