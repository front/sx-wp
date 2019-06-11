# Frontkom Starter Theme
This is a starter wordpress theme to easily kick start a new WP website.

## Technicals

### Requirements
- npm
- composer
- wp-cli
- wp-cli-build

### Install

#### Build
You need the [wp-cli-build](https://github.com/front/wp-cli-build/) tool to get up and running.

Then: grab this repo, and run

`wp build`

This installs core, plugins and themes.

WPMU DEV plugins are handled by Composer, so you also need to run:

`composer install`

#### NPM

Project is based on [frontend starter pack](https://git.netkata.com/netkata/starter-front/tree/starter-v2).

Build dependencies:
> npm install

Running project in development version:
> npm start

Production build:
> npm build

Stylelint (CSS linter):
> npm run lint:css

ESLint (JS linter):
> npm run lint:js

### Update
To update the build file, make sure you are running a fresh copy of production db. Then:

`wp build-generate`

For options, see `wp build-generate --help`

### Deployment
Always use the dev branch in early dev phase. Before first production deploy, create a master branch and use that. Bigger features after launch should be done in feature branches.

### Info
Theming is done with Timber (Twig) & _t theme. Please make sure to read the theme Readme.

## Progress

### TODO
- Styleguide 
    - forms
    - typography alt
- Header (ask PA which header design is correct - /w hamburger or /w dropdown)
- Gutenberg Blocks
    - FAQ 
    - Newsletter (sample newsletter block is in aktivitetsbyen.no project)
- Move social menu to theme (currently it's build on external plugin)
- Mobile
    - check all stuff on mobile & tablet
    - search in menu
    - dropdowns

### DONE
- Styleguide
    - typography
    - buttons
    - links
    - lists
    - tables
    - pull quote
    - quote
- Headers
    - basic
    - top menu
    - social menu
    - hamburger menu (expand menu)
    - dark menu
    - languages
    - search
- Mobile - partially
- Footer
- Gutenberg
    - Hero image
    - Feature boxes
    - Gutenberg settings (theme support, override core block etc.)
- Pure HTML page
- WP Customizer 
    - colors
    - footer
    - copyright text

*Note*: Gallery, Team and Contents with images, cta & text are easy to build with cloud blocks. Probably we don't need separate blocks.
