# SecuribenchMicro.js

A [Securibench Micro](https://github.com/too4words/securibench-micro/tree/master) v1.08 inspired program analysis benchmark for server-side JavaScript. This uses [Express.js](https://expressjs.com) as the server-side framework.

All test cases can be found under `test-cases` and each test case endpoint matches the directory structure, e.g., `test-cases/aliasing/1.js` can be pinged at `localhost:3000/aliasing/1`.

To start:

```
npm install
npm start
```

`lib.js` should be considered "external" as any other library found in `node_modules`. It is meant to mock many of the Java built-in classes that are tested against in the original Securibench Micro benchmark.

### Test Cases

| Category       | Count |
| -------------- | ----- |
| aliasing       | 6     |
| arrays         | 10    |
| basic          | 42    |
| collections    | 14    |
| datastructures | 6     |
| factories      | 3     |
| inter          | 14    |
| pred           | 9     |
| reflection     | 4     |
| sanitizers     | 6     |
| session        | 3     |
| strong_updates | 5     |

_Disclaimer_: This repository attempts to recreate the original in JavaScript exactly, however, some typos and incorrect vulnerability counts are fixed and verifiable by running the app. Notable changes:

- Aliasing 3 is marked as non-vulnerable
- Basic 24 was missing its "BAD" comment
- Collections 8 is marked as non-vulnerable
- Collections 13 lines 52/54 tags are swapped in the Java version
- Datastructures1 is marked as vulnerable
