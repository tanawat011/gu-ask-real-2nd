# Structure

```markdown
src
├── __mocks__ (Global mocking for jest)
│   ├── ...
│   └── ...
├── apis (Call API services)
│   ├── exampleApi
│   │   ├── getExampleList.ts
│   │   ├── getExampleList.test.ts
│   │   ├── createExample.ts
│   │   ├── createExample.test.ts
│   │   └── index.ts (Export all `example` api services)
│   └── ...
├── assets (-)
│   ├── fonts
│   ├── images
│   └── svg
├── components (-)
│   ├── Button
│   │   ├── Button.ts
│   │   ├── Button.test.ts
│   │   └── index.ts
│   └── ...
├── configs (All config for project)
│   ├── windowEnv.ts
│   ├── ...
│   └── index.ts (Export all configs)
├── constants (All constant in the project)
│   ├── env.ts
│   ├── language.ts
│   ├── ...
│   └── index.ts (Export all constants)
├── containers (All layout containers)
│   ├── Authentication
│   │   ├── Authentication.ts
│   │   ├── Authentication.test.ts
│   │   └── index.ts
│   ├── Backoffice
│   │   ├── Backoffice.ts
│   │   ├── Backoffice.test.ts
│   │   └── index.ts
│   └── Error
│       ├── Error.ts
│       ├── Error.test.ts
│       └── index.ts
├── helpers (Utilities for support code)
│   ├── api
│   │   ├── fetchApi.ts
│   │   ├── fetchApi.test.ts
│   │   └── index.ts (Export all utilities in this folder)
│   └── ...
├── hooks (Custom hooks)
│   ├── useSessionStorage
│   │   ├── useSessionStorage.tsx
│   │   ├── useSessionStorage.test.tsx
│   │   └── index.ts
│   ├── useBreadcrumb
│   │   ├── useBreadcrumb.ts
│   │   ├── useBreadcrumb.test.ts
│   │   └── index.ts
│   ├── ...
│   └── index.ts (Export all hooks)
├── locales (Language and localization)
│   ├── en
│   │   ├── common.json
│   │   └── example.json
│   ├── th
│   │   ├── common.json
│   │   └── example.json
│   ├── ...
│   └── index.ts (Export I18N config)
├── pages (Page or Feature)
│   ├── Example
│   │   ├── ExampleList
│   │   │   ├── ExampleList.tsx
│   │   │   ├── ExampleList.test.tsx
│   │   │   └── index.ts
│   │   ├── ...
│   │   └── index.ts (Export all pages in this module)
│   ├── Error
│   │   ├── 401.tsx
│   │   ├── 401.test.tsx
│   │   ├── 404.tsx
│   │   ├── 404.test.tsx
│   │   ├── ...
│   │   └── index.ts (Export all pages in this module)
│   ├── ...
│   └── ...
├── styles
│   ├── global.scss
│   └── styles.scss (Assemble all style file)
├── types
│   ├── common.ts
│   ├── ...
│   ├── package1.d.ts
│   ├── package2.d.ts
│   ├── ...
│   └── index.ts (Export all types)
├── index.tsx (Root file for react compile)
├── Routes.tsx (All routes setting)
└── setupTests.ts (Setting for before run the unit test)
```
