# Husky

```text
`Husky` is a tool that allows us to run scripts especially while using version control like
git for our example we will be using husky to set up pre-commit scripts to run prettier and Eslint on every commit.

You need to be working in a git repository to be able to use Husky we will get back to these tools later in the guide for now.
```

---

## Install and Configuration

### Install Husky

```sh
yarn add -D husky
```

---

## Set up the Husky script in your [`package.json`](../package.json) file

```diff
{
  ...
  "scripts": {
    ...
+    "pre:commit": "yarn lint && yarn build",
+    "pre:push": "yarn test:cv",
+    "husky:install": "husky install",
+    "husky:add": "husky add"
  }
  ...
}
```

### Set up the `pre-commit` & `pre-push` script

```sh
yarn husky:install
yarn husky:add .husky/pre-commit "yarn pre:commit"
yarn husky:add .husky/pre-push "yarn pre:push"
```
