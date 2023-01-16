# VSCode

```text
VSCode is a setting up for your project for `eslint` & `prettier` and format your code
```

---

## Set up the VSCode configuration file([`.vscode/settings.json`](../.vscode/settings.json))

```diff
+{
+  "files.eol": "\n",
+  "files.trimTrailingWhitespace": true,
+  "editor.defaultFormatter": "esbenp.prettier-vscode",
+  "editor.tabSize": 2,
+  "editor.formatOnSave": true,
+  "editor.codeActionsOnSave": {
+    "source.fixAll": false,
+    "source.fixAll.eslint": true,
+    "source.fixAll.prettier": true
+  },
+  "prettier.enable": true,
+  "eslint.format.enable": true,
+  "eslint.codeActionsOnSave.mode": "all",
+  "eslint.codeAction.disableRuleComment": {
+    "enable": true
+  },
+  "eslint.codeAction.showDocumentation": { "enable": true },
+  "eslint.validate": [
+    "vue",
+    "javascript",
+    "javascriptreact",
+    "typescript",
+    "typescriptreact",
+    "jsx",
+    "json"
+  ],
+  "eslint.workingDirectories": ["."],
+  "eslint.alwaysShowStatus": true,
+  "cSpell.words": []
+}
```
