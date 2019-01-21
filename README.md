# Frontkom Starter Theme
This is a starter wordpress theme to easily kick start a new WP website.

## Requirements
- npm
- composer
- wp-cli
- wp-cli-build

## Install
You need the [wp-cli-build](https://github.com/front/wp-cli-build/) tool to get up and running.

Then: grab this repo, and run

`wp build`

This installs core, plugins and themes.

WPMU DEV plugins are handled by Composer, so you also need to run:

`composer install`

## Update
To update the build file, make sure you are running a fresh copy of production db. Then:

`wp build-generate`

For options, see `wp build-generate --help`

## Deployment
Always use the dev branch in early dev phase. Before first production deploy, create a master branch and use that. Bigger features after launch should be done in feature branches.

## Info
The site share some specs with sivilombudsmannen.no, but is completely independent site.

Theming is done with Timber (Twig). Please make sure to read the theme Readme.