# Jest for typescript

```text
`Jest` is a test runner.
```

## Documentation

- [Jest.io](https://jestjs.io/docs/getting-started)
- [testing-library](https://testing-library.com/docs/)

---

## Install and Configuration

### Install Jest for typescript

```sh
yarn add jest ts-jest
```

### Configuration

#### Set up test script in your [`package.json`](../package.json) file

```diff
...
 "scripts": {
    ...
+    "test": "react-scripts test --watchAll=false",
+    "test:w": "react-scripts test",
+    "test:cv": "yarn test --coverage",
+    "test:cv:msg": "yarn test:cv --verbose",
+    "test:cv:w": "yarn test:w --coverage",
+    "test:cv:msg:w": "yarn test:cv:w --verbose",
+    "test:cv:open": "open coverage/lcov-report/index.html",
    ...
  },
...
```

#### Set up basic configuration in your [`package.json`](../package.json) file

```diff
...
+  "jest": {
+    "coverageThreshold": {
+      "global": {
+        "statements": 40,
+        "branches": 40,
+        "functions": 40,
+        "lines": 40
+      }
+    },
+    "coveragePathIgnorePatterns": [
+      "src/pages/*",
+      "src/types/*",
+      "index.tsx",
+      "index.ts"
+    ]
+  }
...
```
