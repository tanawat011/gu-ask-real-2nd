# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

```text
A Frontend Backoffice Project.
```

## 🛣 Active Branch

- [x] `main` (protected) => Production mode.
- [ ] `staging` protected) => Staging mode for QA testing.
- [ ] `uat` protected) => UAT mode for development user.
- [x] `dev` (default & protected) => Development mode for developer.

## 📋 Usage

⚠ Before develop features please create `.env` file contain these variables.

| ENV VARIABLES                              | VALUE                   | type      | REMARK |
| ------------------------------------------ | ----------------------- | --------- | ------ |
| **NODE_ENV**                               | development             | `public`  |        |
| **SKIP_PREFLIGHT_CHECK**                   | true                    | `public`  |        |
| **GENERATE_SOURCEMAP**                     | false                   | `public`  |        |
| **REACT_APP_API_URL**                      | `http://localhost:3000` | `public`  |        |
| **REACT_APP_FIREBASE_API_KEY**             |                         | `private` |        |
| **REACT_APP_FIREBASE_AUTH_DOMAIN**         |                         | `private` |        |
| **REACT_APP_FIREBASE_PROJECT_ID**          |                         | `private` |        |
| **REACT_APP_FIREBASE_STORAGE_BUCKET**      |                         | `private` |        |
| **REACT_APP_FIREBASE_MESSAGING_SENDER_ID** |                         | `private` |        |
| **REACT_APP_FIREBASE_APP_ID**              |                         | `private` |        |
| **REACT_APP_FIREBASE_MEASUREMENT_ID**      |                         | `private` |        |

## Code Features

- [x] [Typescript](https://www.typescriptlang.org/docs/) support
- [x] [SCSS](https://sass-lang.com/documentation/) support
- [x] [Tailwind CSS](https://tailwindcss.com/docs/installation) (with Tailwind preset)
- [x] [Styled Components](https://styled-components.com/docs) (with Styled Components preset)
- [x] [Twin.macro](https://github.com/ben-rogerson/twin.macro) (with Styled Component for Tailwind)
- [x] [Jest](https://jestjs.io/docs/getting-started) (for unit testing)
- [x] [ESLint](https://eslint.org/docs/latest/) (for linting)
- [x] [Prettier](https://prettier.io/docs/en/index.html) (for formatting)
- [x] [i18n](https://www.i18next.com/) (for internationalization)
- [ ] [React Hook Form](https://react-hook-form.com/get-started/) (for form validation)
- [ ] [Yup](https://www.npmjs.com/package/yup) (for schema form validation)
- [x] [React Router Dom V6](https://reactrouter.com/en/main/start/overview) (for routing)
- [ ] [Axios](https://github.com/axios/axios) (for HTTP requests)
- [ ] [Sentry](https://docs.sentry.io/platforms/javascript/guides/react/) (for error reporting)
- [x] [Recoil](https://recoiljs.org/docs/introduction/getting-started) (for state management)
- [ ] [Tanstack Query](https://react-query.tanstack.com/) (for data fetching)
- [ ] [Date fns](https://date-fns.org/) (for date formatting)
- [x] [React Scroll](https://www.npmjs.com/package/react-scroll) (for handle scroll)
- [ ] [React Intersection Observer](https://www.npmjs.com/package/react-intersection-observer) (for handle scroll to element in viewport)
- [ ] [React Infinite Scroll Component](https://www.npmjs.com/package/react-infinite-scroll-component) (for infinite scroll)

## Other Features

- [x] [Husky](https://typicode.github.io/husky/#/) (for linting)
- [x] [Git Commitizen](https://github.com/Zhengqbbb/cz-git) (for commit message)
- [x] [Git Commit linter](https://github.com/conventional-changelog/commitlint) (for commit message)
- [x] [Auto Standard Version](https://github.com/conventional-changelog/standard-version) (for changelog auto generate and versioning)
- [x] [Firebase](https://firebase.google.com/docs) (for authentication, database, storage, hosting, etc.)
- [x] [Github Action](https://docs.github.com/en/actions) (for CI/CD)
- [x] [Gitlab CI](https://docs.gitlab.com/ee/ci/) (for CI/CD)

## Simple Page

- [x] `Simple error Page` (for error handling)
- [ ] `Simple loading component` (for loading handling)
- [ ] `Simple modal component` (for modal handling)

## Available Components

- [x] `Button`
- [x] `Button Group`
- [x] `Text Field`

## Document

- [Git & Changelog format](./docs/git_and_changelog_format.md)
- [Available scripts](./docs/available_scripts.md)
- [Unit-test](./docs/unit_test.md)
- [Better comment](./docs/better-comments.md)

## HOW TO

### How to add a new page

- Create a new page in `src/pages` with the page name.
- Add a new route in the `src/hooks/useRouteList` file.
- Update a type of a new route in the type folder -> `src/hooks/useRouteList/types`.

### How to add a new env

- Add a new env in the `.env` file (for your local application).
- Add a new env in the `.env.example` file (this is the example env for your team member).
- Add a new env in the `README.md` file (for documentation).
- Add a new env in the `public/template-config.js` file (for production deployment).
- Add a new env in the `k8s/deployment.yaml` file (for production deployment).
- Update a type of a new env in the type folder -> `types/windowEnv.d.ts`.
