# Available Scripts

In the project directory, you can run:

## `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## `yarn storybook`

Runs the storybook.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

## `yarn build`

**Note: This will run together with hook pre:commit.**
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## `yarn build:css`

**Note: This will not effect with production mode.**
Builds the css file from the `src/styles` folder for the production build.\

**For development mode only.**

## `yarn build:storybook`

Builds the storybook for the production build to the `storybook-static` folder.\

## `yarn serve`

Runs the app from build folder in the `build` folder.\

**For development mode only.**

## `yarn serve:storybook`

Runs the storybook from build folder in the `storybook-static` folder.\

**For development mode only.**

## `yarn serve:coverage`

Runs the coverage code from coverage folder in the `coverage/lcov-report` folder.\

**For development mode only.**

## `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## `yarn lint`

**Note: This will run together with hook pre:commit.**
will search for problems, but will not fix

## `yarn lint:fix`

will search and try to fix the problems.

## `yarn format`

will call prettier to fix the code style.

## `yarn test`

Launches the test runner in the interactive without watch mode.

## `yarn test:w`

Launches the test runner in the interactive with watch mode.

## `yarn test:cv`

**Note: This will run together with hook pre:push.**
Launches the test runner in the interactive without watch mode together with collect coverage result.

## `yarn test:cv:msg`

Launches the test runner in the interactive without watch mode together with collect coverage result and message description.

**Test and generate snapshot => Example:**

```sh
yarn test:cv:msg -u
```

**Test with specific name pattern => Example:**

```sh
yarn test:cv:msg -t '<Button />'
```

**Test with specific path pattern => Example:**

```sh
yarn test:cv:msg --testPathPattern 'Button'
```

**Test coverage single folder => Example:**

```sh
yarn test:cv:msg --collectCoverageFrom '**/components/**/*' --testPathPattern 'components'
```

**Test coverage single file => Example:**

```sh
yarn test:cv:msg --collectCoverageFrom '**/Button.tsx' --testPathPattern 'Button.test'
```

## `yarn test:cv:w`

Launches the test runner in the interactive with watch mode together with collect coverage result.

## `yarn test:cv:msg:w`

Launches the test runner in the interactive with watch mode together with collect coverage result and message description.

## `yarn pre:commit`

will auto run when you commit your code.

## `yarn pre:push`

will auto run when you push your code.

## `yarn husky:install`

Use this command to install the husky hooks.

## `yarn husky:add`

Use this command to add the husky hooks.

**By normally used when init project.**

**Example:**

```sh
yarn husky:add .husky/pre-commit "yarn pre:commit"
yarn husky:add .husky/pre-push "yarn pre:push"
```
