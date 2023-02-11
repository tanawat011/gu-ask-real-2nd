# Structure

```markdown
gu-ask-real-2nd/
├── .husky/           --> Git hooks
│   ├── pre-commit.sh --> Run before commit
│   ├── pre-push.sh   --> Run before push
│   └── ...
├── .vscode/
│   ├── extensions.json --> VSCode extensions recommendations
│   └── settings.json   --> VSCode settings
├── docker/               --> Dockerfile and docker-compose storage file
│   ├── Dockerfile        --> Dockerfile for production
│   └── local.Dockerfile  --> Dockerfile for local development
├── docs --> Documentation
├── k8s/                --> Kubernetes
│   └── deployment.yaml --> Deployment file
├── nginx/
│   └── default.conf --> Nginx configuration
├── public/
│   ├── template-config.js --> Template configuration env for production mode
│   └── ...
├── scripts/
│   ├── build_image_gitlab.sh --> Script for build image in gitlab
│   ├── jest.sh               --> Script for run jest
│   └── k8s_deployment.sh     --> Script for deploy to kubernetes
├── src/
│   ├── __mocks__/ --> Mocks for jest
│   │   └── ...
│   ├── components/ --> All Components
│   │   └── ...
│   ├── config/                 --> Configuration
│   │   ├── fontAwesomeIcon.ts  --> Font awesome icon configuration
│   │   ├── windowEnv.ts        --> Window env configuration
│   │   └── ...
│   ├── constants/ --> All Constants
│   │   └── ...
│   ├── hooks/ --> All Hooks
│   │   └── ...
│   ├── layouts/            --> All Layouts
│   │   ├── Authentication  --> Authentication Layout
│   │   ├── Error           --> Error Layout
│   │   └── Main            --> Main Layout
│   ├── locales/  --> All localizations
│   │   ├── en/   --> English
│   │   │   └── ...
│   │   ├── th/   --> Thai
│   │   │   └── ...
│   │   └── ...
│   ├── pages/            --> All Pages
│   │   └── UiComponents  --> UI Components Page
│   │       ├── ButtonUi  --> Button UI
│   │       ├── InputUi   --> Input UI
│   │       └── ...
│   ├── recoils/    --> All Recoils storages
│   │   └── atoms/  --> All Atoms
│   │       └── ...
│   ├── styles/               --> All Styles
│   │   ├── components/       --> All Global components styles
│   │   │   └── ...
│   │   ├── tailwind/         --> All Tailwind styles
│   │   │   └── ...
│   │   ├── global.scss       --> Global styles
│   │   ├── scrollbar.scss    --> Scrollbar styles
│   │   └── styles.scss       --> Assemble all styles
│   ├── types/              --> All Types
│   │   ├── common/         --> Common types
│   │   │   └── ...
│   │   ├── http/           --> Http types
│   │   │   └── ...
│   │   ├── react/          --> Utilities types for react
│   │   │   └── ...
│   │   ├── utilities/      --> Utilities types
│   │   │   └── ...
│   │   ├── i18next.d.ts    --> i18next types
│   │   ├── image.d.ts      --> Image types
│   │   ├── twin.d.ts       --> Twin.macro types
│   │   ├── windowEnv.d.ts  --> Window env types
│   │   └── ...
│   ├── utils/          --> All Utilities
│   │   ├── axios/      --> Axios utilities
│   │   │   └── ...
│   │   ├── color/      --> Color utilities
│   │   │   └── ...
│   │   ├── components/ --> Components utilities
│   │   │   └── ...
│   │   ├── env/        --> Env utilities
│   │   │   └── ...
│   │   ├── jest/       --> Jest utilities
│   │   │   └── ...
│   │   ├── object/     --> Object utilities
│   │   │   └── ...
│   │   ├── route/      --> Route utilities
│   │   │   └── ...
│   │   ├── string/     --> String utilities
│   │   │   └── ...
│   │   └── ...
│   ├── index.tsx     --> Entry point
│   ├── Routers.tsx   --> Routers
│   ├── setupTests.ts --> Setup for jest
│   └── ...
├── .dockerignore       --> Docker ignore file
├── .env                --> Environment variables
├── .env.example        --> Environment variables example
├── .eslintignore       --> Eslint ignore file
├── .eslintrc.js        --> Eslint configuration
├── .gitignore          --> Git ignore file
├── .gitlab-ci.yml      --> Gitlab CI/CD configuration
├── .prettierignore     --> Prettier ignore file
├── .prettierrc.js      --> Prettier configuration
├── .yarnrc             --> Yarn configuration
├── changelog.md        --> Changelog
├── docker-compose.yml  --> Docker compose file
├── makefile            --> Makefile
├── package.json        --> Package.json
├── postcss.config.js   --> Postcss configuration
├── README.md           --> Readme
├── tailwind.config.js  --> Tailwind configuration
├── tsconfig.json       --> Typescript configuration
├── yarn.lock           --> Yarn lock file
└── ...
```
