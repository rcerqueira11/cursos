## Environment Setup
- Goals
    - Automated Testing
    - Linting 
    - Minification
    - Bundling
    - JSX compilation
    - ES6 transpilation

### Skip course
- github.com/coryhouse/pluralsight-redux-starter

## Environment Overview

### Libraries
- Babel: translate ES6 to ES5
    - Babel-polyfill for features that can't be simply transpiled
    - U can pull the polyfills that you need not all the whole package
        - Example: object-assign on npm
- Webpack: module bundler compile js into a single minified file that works in the browser
- Mocha: to handle testing 'framework for testing'
- ESlint: alert us when we manke mistakes in our code.

## Versions

- React 15.0.2
- Redux 3.5.2
- React/Router 2.4.0
- Webpack 1.13
- Babel 6.*

## Hot Reloading

### babel-preset-react-hmre

#### Warnings
- Experimental
- Doesn't reload functional components (unlses there's a class somewhere up the hierarchy tree )
- Doesn't reload container functions like mapStateToProps
- Other options exists (limitations are few and keep in mind is only used in development, worst case scenario you have to hit the reload button of the page)

## Installing node > 4
- v6.* carga los modulos 4 veces mas rapido que la version 4.x
- v5. in case of some problem

## Create Package.json
- Download from [here](https://github.com/coryhouse/pluralsight-redux-starter/blob/master/package.json)

### Definition of the packages
- [GithubRepo](https://github.com/coryhouse/pluralsight-redux-starter.git)

### Production Dependencies
| **Dependency** | **Use** |
|----------|-------|
|babel-polyfill | Polyfill for Babel features that cannot be transpiled |
|bootstrap|CSS Framework|
|jquery|Only used to support toastr|
|react|React library |
|react-dom|React library for DOM rendering |
|react-redux|Redux library for connecting React components to Redux |
|react-router|React library for routing |
|react-router-redux|Keep React Router in sync with Redux application state|
|redux|Library for unidirectional data flows |
|redux-thunk|Async redux library|
|toastr|Display messages to the user|

### Development Dependencies
| **Dependency** | **Use** |
|----------|-------|
|babel-cli|Babel Command line interface |
|babel-core|Babel Core for transpiling the new JavaScript to old |
|babel-loader|Adds Babel support to Webpack |
|babel-plugin-react-display-name| Add displayName to React.createClass calls |
|babel-preset-es2015|Babel preset for ES2015|
|babel-preset-react| Add JSX support to Babel |
|babel-preset-react-hmre|Hot reloading preset for Babel|
|babel-register|Register Babel to transpile our Mocha tests|
|cheerio|Supports querying DOM with jQuery like syntax - Useful in testing and build process for HTML manipulation|
|colors|Adds color support to terminal |
|compression|Add gzip support to Express|
|cross-env|Cross-environment friendly way to handle environment variables|
|css-loader|Add CSS support to Webpack|
|enzyme|Simplified JavaScript Testing utilities for React|
|eslint|Lints JavaScript |
|eslint-plugin-import|Advanced linting of ES6 imports|
|eslint-plugin-react|Adds additional React-related rules to ESLint|
|eslint-watch|Add watch functionality to ESLint |
|eventsource-polyfill|Polyfill to support hot reloading in IE|
|expect|Assertion library for use with Mocha|
|express|Serves development and production builds|
|extract-text-webpack-plugin| Extracts CSS into separate file for production build | 
|file-loader| Adds file loading support to Webpack |
|jsdom|In-memory DOM for testing|
|mocha| JavaScript testing library |
|nock| Mock HTTP requests for testing |
|npm-run-all| Display results of multiple commands on single command line |
|open|Open app in default browser|
|react-addons-test-utils| Adds React TestUtils |
|redux-immutable-state-invariant|Warn when Redux state is mutated|
|redux-mock-store|Mock Redux store for testing|
|rimraf|Delete files |
|style-loader| Add Style support to Webpack |
|url-loader| Add url loading support to Webpack |
|webpack| Bundler with plugin system and integrated development server |
|webpack-dev-middleware| Adds middleware support to webpack |
|webpack-hot-middleware| Adds hot reloading to webpack |

> extract-text-webpack-plugin: Extracts CSS into separate file for production build 

## Install npm Packages
- Go to package.json folder
- run in terminal $npm install
- install all node_modules

## Introduce npm Scripts

### Why npm scripts?

- Easy to learn
- Simple
- No extra layer of abstraction
- No dependence on separate plugins
- Simpler debugging
- Better docs

- Read more [here](bit.ly/npmvsgulp)

## Create a src Directory

- create a folder src: sit all of our source code 

## Setup webpack 
- Bundle our app for the web
- To bundle all of our javascript together for the browser