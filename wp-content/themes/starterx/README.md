# Frontkom Wordpress Starter Theme

## Features

* Provides modern frontend tooling with little to no configuration
* Transpiles only unsupported things

## Prerequisites

* Node.js in latest LTS version - https://nodejs.org/en/download/

## Quick start

1. Copy contents of this repository to the root of your project.
2. Run `npm i` to install dependencies from package.json.
3. Rename `local-config-example.json` to `local-config.json` and do the chagnes according to your local setup.
3. Run `npm run dev`. This will start the webpack in watch mode and opens browser with Browser Sync.

### Running project in development version:

```npm run dev```

### Production build:

```npm build```

### Stylelint (CSS linter):

```npm run lint:css```

### ESLint (JS linter):

```npm run lint:js```


### Tools used

* [Webpack](https://webpack.js.org/) ([docs](https://webpack.js.org/configuration/)) with [webpack-command](https://github.com/webpack-contrib/webpack-command) and [webpack-serve](https://github.com/webpack-contrib/webpack-serve)
* [Babel](https://babeljs.io/) ([docs](https://babeljs.io/docs/en/)), with following presets:
    * [babel-preset-env](https://babeljs.io/docs/en/babel-preset-env)
    * [babel-preset-react](https://babeljs.io/docs/en/babel-preset-react)
* [ESLint](https://eslint.org/) ([docs](https://eslint.org/docs/user-guide/configuring))
* [Stylelint](https://stylelint.io/) ([docs](https://stylelint.io/user-guide/)) with [custom config](.stylelintrc)

