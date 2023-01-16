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

| ENV VARIABLES            | VALUE                   | type     | REMARK |
| ------------------------ | ----------------------- | -------- | ------ |
| **NODE_ENV**             | development             | `public` |        |
| **SKIP_PREFLIGHT_CHECK** | true                    | `public` |        |
| **GENERATE_SOURCEMAP**   | false                   | `public` |        |
| **REACT_APP_API_URL**    | `http://localhost:8001` | `public` |        |

## Learn More

- You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- To learn React, check out the [React documentation](https://reactjs.org/).

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
- [x] [Husky](https://typicode.github.io/husky/#/) (for linting)
- [ ] [React Hook Form](https://react-hook-form.com/get-started/) (for form validation)
- [ ] [Yup](https://www.npmjs.com/package/yup) (for schema form validation)
- [x] [React Router Dom V6](https://reactrouter.com/en/main/start/overview) (for routing)
- [ ] [Axios](https://github.com/axios/axios) (for HTTP requests)
- [ ] [Sentry](https://docs.sentry.io/platforms/javascript/guides/react/) (for error reporting)
- [x] [Recoil](https://recoiljs.org/docs/introduction/getting-started) (for state management)
- [ ] [Tanstack Query](https://react-query.tanstack.com/) (for data fetching)
- [ ] [Date fns](https://date-fns.org/) (for date formatting)

## Utilities Support

- [x] `Simple error Page` (for error handling)
- [ ] `Simple loading component` (for loading handling)
- [ ] `Simple modal component` (for modal handling)

## Document

- [Git & Changelog format](./docs/git_and_changelog_format.md)
- [Available scripts](./docs/available_scripts.md)
- [Unit-test](./docs/unit_test.md)
- [Better comment](./docs/better-comments.md)

## HOW TO

### How to add a new page

- Create a new page in `src/pages` with the page name.
- Add a new route in the `src/hooks/useRouteList` file.
- Update a type of a new route in the type folder -> `types/routes.ts`.

### How to add a new env

- Add a new env in the `.env` file (for your local application).
- Add a new env in the `.env.example` file (this is the example env for your team member).
- Add a new env in the `README.md` file (for is documentation).
- Update a type of a new env in the type folder -> `types/windowEnv.d.ts`.
