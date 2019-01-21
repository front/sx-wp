# Frontkom Wordpress Starter Theme

## Features

* Provides modern frontend tooling with little to no configuration
* Transpiles only unsupported things

## Prerequisites

* Node.js in latest LTS version - https://nodejs.org/en/download/

## Quick start

1. Copy contents of this repository to the root of your project.
2. Run `npm i` to install dependencies from package.json.
3. Run `npm start`

### Running project in development version:

```npm start```

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

