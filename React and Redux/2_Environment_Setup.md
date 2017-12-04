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

### Use
- webpack.config
- by convenction placed in the root of your project
- for env webpack.config.dev.js
- Designed to vocer our use cases really well, so we don't have to write to much code to get a lot of power in our build process

#### noInfo
- in fall up will display a list o fall the files that it's bundling 

#### entry
- entry points for the aplication 
- good way to inject middelware
- 'eventsource-polyfill':  necessary for hot reloading with IE
- 'webpack-hot-middleware/client?reload=true': note that it reloads the page if hot module reloading fails.
- path.resolve(__dirname, 'src/index')
    - important to this be last order is critical
    - se refiere al index.js aunq no especifiquemos la extencion

#### target

- we could use node if we are using
- web it understand that need to bundle up the code in a way that the web browser can understand
- node if we are using webpack to build an app running in node, so bundle up in a way that node can work with it

#### output

- where it should create our web bundle
- webpack wont generate any actual physical files, it will serve files from memory
- need to define a path and a name to simulate the phisical file's existence
- app will run from dist folder 

#### devServer

- we tell webpack where our source code is


##### plugins

- new webpack.HotModuleReplacementPlugin(): enables us to replace modules without having to do a full browser refresh
- new webpack.NoErrorsPlugin(): keep errors from breaking our hot reloading experience

##### modules

- here we tell webpack the types of files we want to handle
- loaders
    - javascript adn while working with it we want to use babel to transpile our code: 
        - ` { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel'] }`
    - great thing about webpack is we can teach it to know more than just javascript, css, font, saas, less even images if we like
        - `{ test: /(\.css)$/, loaders: ['style', 'css'] }`
    - bootstrap 
        - necessary for the file types that bootstrap utilizes for fonts etc
        - `{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' }`
        - `{ test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' }`
        - `{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' }`
        - `{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }`        

## Set up editorconfig  

- usefull when work on a team that might be working on different editors.
- .editorconfig must be the name
- set on the upper top of the project [Proyect Folder] -> .editorconfig
- all have consistency in the spacing (Atom,Webstorm,VSCode)
```
// editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

```

## Set up Babel

- configured via .babelrc

- presets react and es2015
- env only in development we wan to run react-hmre
- react-hmre bundles up a number of different hot reloading-related code (experimental)
```javascript
{
  "presets": ["react", "es2015"],
  "env": {
    "development": {
      "presets": ["react-hmre"]
    }
  }
}
```

## Set up Express  

### srcServer.js

- configure our web server that servs up the files in our source directory
- express
    - easy to configuire to work with our Webpack development middleware

```js
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 3000;
// instance of express
const app = express();
// we call web pack with the config defined
const compiler = webpack(config);

// we aregoing to use webpack's dev middleware 
// and pass it our compiled web pack configuration
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, // no information in the command line as its runs
    publicPath: config.output.publicPath // public path defined within our webpack.conf
}));

// define we want to use webpack's hot middleware
// and pass it the webpack(config)
app.use(require('webpack-hot-middleware')(compiler));

// tell express what files we want it to serve
// since is a single page app we want Express to serve up 
// our index.html for all requests
// so we specify a wild card just here app.get('*'
// so any request it receives end up returning index.html
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        // package installed in npm install 
        open(`http://localhost:${port}`);
    }
});
```

## Create Start Script

- in package.json
```json
script {
    // we need to use babel in our srcServer becouse we use son ES6 inside of it
    "start": "babel-node tools/srcServer.js"
}
```

## Create Start Message

- by convention will run before the start script if we add the pre in front of the word
    - prewordname 
- we can add a script after the start script with the word post in front of it
    - postwordname 
```json
script {
    "prestart": "babel-node tools/startMessage.js",
    "start": "babel-node tools/srcServer.js"
}
```

## Set up ESLint

- quic catch mistakes
- maintain consistency 
- enforce best practices
- to use it we should place a `.eslintrc` file in the root of our project

- Code
    - 0: Off
    - 1: Warning
    - 2: Error

- Teams can quickly get comfortable ignoring linitng warnings, so if it make as an error they will have to fix it
```json
{
//extends recomended settings as a base line
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],

//augmenting the recommended settins with plugins that provide enhance linting for es6 imports
  "plugins": [
    "react" // to add a number of useful React-specific linting rules
  ],

// Support for ES6 out of the box
// we tell it also support jsx
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },

  // declare some env that eslint should be aware of
  // each of this tells to ESLint to expect certain global variables
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jquery": true,
    "mocha": true
  },


  "rules": {
    "quotes": 0,
    "no-console": 1,
    "no-debugger": 1,
    "no-var": 1,
    "semi": [1, "always"],
    "no-trailing-spaces": 0,
    "eol-last": 0,
    "no-unused-vars": 0,
    "no-underscore-dangle": 0,
    "no-alert": 0,
    "no-lone-blocks": 0,
    "jsx-quotes": 1,
    "react/display-name": [ 1, {"ignoreTranspilerName": false }],
    "react/forbid-prop-types": [1, {"forbid": ["any"]}],
    "react/jsx-boolean-value": 1,
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-curly-spacing": 1,
    "react/jsx-indent-props": 0,
    "react/jsx-key": 1,
    "react/jsx-max-props-per-line": 0,
    "react/jsx-no-bind": 1,
    "react/jsx-no-duplicate-props": 1,
    "react/jsx-no-literals": 0,
    "react/jsx-no-undef": 1,
    "react/jsx-pascal-case": 1,
    "react/jsx-sort-prop-types": 0,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/no-danger": 1,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,
    "react/no-direct-mutation-state": 1,
    "react/no-multi-comp": 1,
    "react/no-set-state": 0,
    "react/no-unknown-property": 1,
    "react/prefer-es6-class": 1,
    "react/prop-types": 1,
    "react/react-in-jsx-scope": 1,
    "react/require-extension": 1,
    "react/self-closing-comp": 1,
    "react/sort-comp": 1,
    "react/wrap-multilines": 1
  }
}
```

### Run it

- ESLint lacks watch funtionality
- so instead use a npm package called ESLint watch 
- eswatch: wraps ESLint and provides file watching functionality
- add to script `"lint": "node_modules/.bin/esw webpack.config.* src tools"`
- `node_modules/.bin/esw` not completle necessary but just in case 

### ESLint Watch

- Does NOT wtach files by default
- have to pass it a commmand line flag to tell it that you want to enable file watch 
- add to script `"lint:watch": "npm run lint -- --watch"`
    - we run the lint script above, but this syntax lets me pass the watch flag to our lint script
    - says: run the npm lint script but pass the watch flag to ESLint watch

#### Run it

- `npm run lint:watch`

## Create Parallel Scripts

- Use npm run all
    - supports running multiple npm scripts
    - returning all their utput to the same command line 
    - can be run one at a time or in parallel
- change name start to the one that is going to do all 
- 
"scripts": {
        "prestart": "babel-node tools/startMessage.js",
        "start": "npm-run-all --parallel open:src lint:watch",
        "open:src": "babel-node tools/srcServer.js",
        "lint": "node_modules/.bin/esw webpack.config.* src tools",
        "lint:watch": "npm run lint -- --watch"
    },

- --parallel anythign set to the right will be running at the same time 

## Set up testing

- create testSetup.js in the tools folder

```js
// This file is written in ES5 since it's not transpiled by Babel.
// This file does the following:
// 1. Sets Node environment variable
// 2. Registers babel for transpiling our code for testing
// 3. Disables Webpack-specific features that Mocha doesn't understand.
// 4. Requires jsdom so we can test via an in-memory DOM in Node
// 5. Sets up global vars that mimic a browser.

/* eslint-disable no-var*/

/* This setting assures the .babelrc dev config (which includes
 hot module reloading code) doesn't apply for tests.
 But also, we don't want to set it to production here for
 two reasons:
 1. You won't see any PropType validation warnings when
 code is running in prod mode.
 2. Tests will not display detailed error messages
 when running against production version code
 */
process.env.NODE_ENV = 'test'; //so that develop-speific feautres like hot reloading are disabled when running tests

// Register babel so that it will transpile ES6 to ES5
// before our tests run.
require('babel-register')();

// Disable webpack-specific features for tests since
// Mocha doesn't know what to do with them.
require.extensions['.css'] = function () { return null; };
require.extensions['.png'] = function () { return null; };
require.extensions['.jpg'] = function () { return null; };


//react looks for this to determinate if tis in the browser {

// provide a virtual in-memory DOM  
// Configure JSDOM and set global variables
// to simulate a browser environment for tests.
// to not to have to open the browser
var jsdom = require('jsdom').jsdom;

// helps simulate the browser enviroment  
var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js'
};
// } important to have thses available when doing DOM-based tersting in react

documentRef = document;  //eslint-disable-line no-undef
```

## Add Test Scripts

- add the script
- specify mocha and specifying the reporter that you want to use
    - progress reportes is compact and dont have a lot of noise 
- run test setup and then run any test that it finds in our source directory
- `"test":"mocha --reporter progress tools/testSetup.js \"src/**/*.test.js\""`
- some prefer to use spect.js

## Summary

### Dev enviroment, complete!
- Babel: traspiling
- Webpack: bundling
- ESLint: lintintg
- Mocha: testing
- Express: serving app
- npm Scripts: tying all this together