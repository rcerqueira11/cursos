# React and Redux

## Table of Content

- [Introduction](#introduction)
    - [To learn on this course](#to-learn-on-this-course)
    - [Why Redux?](#why-redux)
- [Environment Setup](#environment-setup)
    - [Skip course](#skip-course)
- [Environment Overview](#environment-overview)
    - [Libraries](#libraries)
- [Versions](#versions)
- [Hot Reloading](#hot-reloading)
    - [babel-preset-react-hmre](#babel-preset-react-hmre)
        - [Warnings](#warnings)
- [Installing node > 4](#installing-node--4)
- [Create Package.json](#create-packagejson)
    - [Definition of the packages](#definition-of-the-packages)
    - [Production Dependencies](#production-dependencies)
    - [Development Dependencies](#development-dependencies)
- [Install npm Packages](#install-npm-packages)
- [Introduce npm Scripts](#introduce-npm-scripts)
    - [Why npm scripts?](#why-npm-scripts)
- [Create a src Directory](#create-a-src-directory)
- [Setup webpack](#setup-webpack)
    - [Use](#use)
        - [noInfo](#noinfo)
        - [entry](#entry)
        - [target](#target)
        - [output](#output)
        - [devServer](#devserver)
            - [plugins](#plugins)
            - [modules](#modules)
- [Set up editorconfig](#set-up-editorconfig)
- [Set up Babel](#set-up-babel)
- [Set up Express](#set-up-express)
    - [srcServer.js](#srcserverjs)
- [Create Start Script](#create-start-script)
- [Create Start Message](#create-start-message)
- [Set up ESLint](#set-up-eslint)
    - [Run it](#run-it)
    - [ESLint Watch](#eslint-watch)
        - [Run it](#run-it)
- [Create Parallel Scripts](#create-parallel-scripts)
- [Set up testing](#set-up-testing)
- [Add Test Scripts](#add-test-scripts)
- [Summary](#summary)
    - [Dev enviroment, complete!](#dev-enviroment-complete)
- [Four+ Ways to Create React Components?!](#four-ways-to-create-react-components)
- [ES5 Class Component](#es5-class-component)
- [ES6 Class Component](#es6-class-component)
    - [React in ES6](#react-in-es6)
        - [Recomended](#recomended)
- [ES5 Stateless Component](#es5-stateless-component)
- [ES5 Stateless Functional Component](#es5-stateless-functional-component)
    - [Stateless Functional Components: 9 Benefits](#stateless-functional-components-9-benefits)
- [When Should I Use Each Style?](#when-should-i-use-each-style)
- [Other Ways to Create Components](#other-ways-to-create-components)
- [Container vs Presentation Components](#container-vs-presentation-components)
    - [Container](#container)
    - [Presentation](#presentation)
    - [Alternatve Jargon](#alternatve-jargon)
- [Summary](#summary)
- [Intro](#intro)
- [Create initial Components](#create-initial-components)
    - [Home component](#home-component)
    - [About component](#about-component)
- [Create App Layout](#create-app-layout)
- [Configure Routing](#configure-routing)
    - [IndexRoute](#indexroute)
    - [App component](#app-component)
- [Update Entry Point](#update-entry-point)
- [Create Header](#create-header)
- [Create Course Page](#create-course-page)
- [Summary](#summary)
- [Intro](#intro)
- [Do i need Redux?](#do-i-need-redux)
        - [IF:](#if)
    - [When Do I Need Redux](#when-do-i-need-redux)
- [Three Core Redux Principles](#three-core-redux-principles)
    - [**One immutable store**](#one-immutable-store)
    - [**Actions trigger changes**](#actions-trigger-changes)
    - [**Reducers update state**](#reducers-update-state)
- [Flux Similarities](#flux-similarities)
- [Flux Differences](#flux-differences)
    - [Redux New Concepts](#redux-new-concepts)
        - [**Reducers**](#reducers)
        - [**Containers**](#containers)
    - [**Immutability**](#immutability)
    - [Flux vs Redux](#flux-vs-redux)
        - [Flux](#flux)
        - [Redux](#redux)
            - [reducer](#reducer)
        - [React-Redux](#react-redux)
- [Redux Flow Overview](#redux-flow-overview)
- [Summary](#summary)
- [Actions](#actions)
    - [Action Creator](#action-creator)
- [Store](#store)
    - [Creating Redux Store](#creating-redux-store)
    - [Redux Store](#redux-store)
- [Immutability](#immutability)
    - [What's Mutable in JS?](#whats-mutable-in-js)
    - [Create copies objects in javascript](#create-copies-objects-in-javascript)
        - [Signature](#signature)
        - [Example](#example)
            - [Description](#description)
- [Why Immutabiity?](#why-immutabiity)
    - [Clarity](#clarity)
    - [Performance](#performance)
    - [Awesome Sauce (amazing debugging experience)](#awesome-sauce-amazing-debugging-experience)
- [Handling Immutability](#handling-immutability)
    - [Handling Immutability State](#handling-immutability-state)
        - [ES6](#es6)
        - [ES5](#es5)
        - [Libraries](#libraries)
    - [How do i enforce immutablility?](#how-do-i-enforce-immutablility)
    - [Trust](#trust)
    - [redux-immutable-state-invariant](#redux-immutable-state-invariant)
    - [Immutable.js](#immutablejs)
- [Reducers](#reducers)
    - [What is a Reducer?](#what-is-a-reducer)
    - [Forbidden in Reducers](#forbidden-in-reducers)
    - [All Reducers are called on each dispatch](#all-reducers-are-called-on-each-dispatch)
    - [Reducer = "Slice" of state](#reducer--slice-of-state)
- [Summary](#summary)
        - [Actions](#actions)
        - [Store](#store)
        - [Immutability](#immutability)
        - [Reducers](#reducers)
- [Intro](#intro)
- [Container vs Presentational Components](#container-vs-presentational-components)
    - [Two Component Types](#two-component-types)
- [React-redux introduction](#react-redux-introduction)
    - [Provides component](#provides-component)
    - [Connect](#connect)
- [mapStateToProps](#mapstatetoprops)
    - [Reselect](#reselect)
- [mapDispatchToProps](#mapdispatchtoprops)
    - [3 Ways to Handle mapDispatchToProps](#3-ways-to-handle-mapdispatchtoprops)
        - [Ignore it. Use dispatch](#ignore-it-use-dispatch)
            - [Example](#example)
        - [Manually wrap](#manually-wrap)
        - [Use bindActionCreators](#use-bindactioncreators)
- [A Chat with Redux](#a-chat-with-redux)
- [Summary](#summary)
- [Create Simple Add Course Form](#create-simple-add-course-form)
- [Binding in ES6](#binding-in-es6)
- [Actions](#actions)
- [Reducers](#reducers)
- [Root Reducer](#root-reducer)
- [Store](#store)
    - [Enhancing store with a middleware](#enhancing-store-with-a-middleware)
- [Instatiate Store and Provider](#instatiate-store-and-provider)
    - [Store](#store)
    - [Provider](#provider)
- [Connect Container](#connect-container)
    - [mapStateToProps](#mapstatetoprops)
    - [dispatch](#dispatch)
- [Step Through Redux Flow](#step-through-redux-flow)
    - [Some errors](#some-errors)
- [mapDispatchToProps Manual Mapping](#mapdispatchtoprops-manual-mapping)
        - [Code example](#code-example)
- [bindActionCreators](#bindactioncreators)
        - [Code Example](#code-example)
- [Container Structure Review](#container-structure-review)
    - [First Constructor](#first-constructor)
    - [Child functions](#child-functions)
- [Render functions](#render-functions)
- [propTypes](#proptypes)
- [Redux Connect and related functions](#redux-connect-and-related-functions)
- [Action Type Constant](#action-type-constant)
    - [Options](#options)
        - [Constants File](#constants-file)
        - [Constants withing the actions File](#constants-withing-the-actions-file)
        - [actionType File](#actiontype-file)
- [Summary](#summary)
    - [Redux Flow](#redux-flow)
- [Why a mock API?](#why-a-mock-api)
- [Async Library Options](#async-library-options)
    - [Async](#async)
    - [Redux Async Libraries](#redux-async-libraries)
        - [redux-thunk](#redux-thunk)
        - [redux-promise](#redux-promise)
        - [redux-saga](#redux-saga)
    - [Comparasion](#comparasion)
        - [Generators](#generators)
- [Thunk Overview](#thunk-overview)
    - [Example](#example)
- [Mock API Setup](#mock-api-setup)
- [Add Thunk to Store](#add-thunk-to-store)
- [Create Load Courses Thunk](#create-load-courses-thunk)
    - [Load courses when the app initially loads](#load-courses-when-the-app-initially-loads)
- [Action Naming Conventions](#action-naming-conventions)
- [Load Courses in Reducer](#load-courses-in-reducer)
- [Dispatch Action on Page Load](#dispatch-action-on-page-load)
- [Create Course List Component](#create-course-list-component)
- [Summary](#summary)
- [Create Manage Course Page](#create-manage-course-page)
- [Create Manage Course Form](#create-manage-course-form)
- [Crerate Form Input Components](#crerate-form-input-components)
- [Use Manage Course Form](#use-manage-course-form)
- [Create Author Actions](#create-author-actions)
- [Create Author Reducer](#create-author-reducer)
- [Map Author Data for Dropdown](#map-author-data-for-dropdown)
- [Create Form Change Handler](#create-form-change-handler)
- [Create Save Course Thunk](#create-save-course-thunk)
- [Handle Creates and Updates in Reducer](#handle-creates-and-updates-in-reducer)
- [Dispatch Create and Update](#dispatch-create-and-update)
- [Redirect via React Router Context Redirect](#redirect-via-react-router-context-redirect)
- [Populate Form via mapStateToProps](#populate-form-via-mapstatetoprops)
- [Update State via componentWillReceiveProps](#update-state-via-componentwillreceiveprops)
- [Summary](#summary)
- [Create Preloader Component](#create-preloader-component)
- [Create Ajax Status Actions](#create-ajax-status-actions)
- [Create Ajax Status Reducer](#create-ajax-status-reducer)
- [Call Begin Ajax in Thunks](#call-begin-ajax-in-thunks)
- [Hide Preloader Based on Status](#hide-preloader-based-on-status)
- [Use Promises to Wait for Thunks](#use-promises-to-wait-for-thunks)
- [Create Form Submission Loading Indicator](#create-form-submission-loading-indicator)
- [Display save notification](#display-save-notification)
- [Error Handling](#error-handling)
- [Summary](#summary)
- [Intro](#intro)
- [Testing Frameworks](#testing-frameworks)
- [Helper Libraries](#helper-libraries)
    - [React Test Utils](#react-test-utils)
        - [Two Rendering Options](#two-rendering-options)
        - [DOM Interactions](#dom-interactions)
    - [Enzyme](#enzyme)
        - [Ensyme is an Abstraction](#ensyme-is-an-abstraction)
    - [Comparasion](#comparasion)
- [Where to Test](#where-to-test)
    - [Naming Test Files](#naming-test-files)
    - [Where Do Test Fules Belong?](#where-do-test-fules-belong)
    - [Our Plan](#our-plan)
- [Testing React with React Test Utils](#testing-react-with-react-test-utils)
    - [Testng Presentation Components](#testng-presentation-components)
    - [Rendering Options](#rendering-options)
    - [Test Component with Shallow Rendering](#test-component-with-shallow-rendering)
        - [Making the test](#making-the-test)
- [Test React with Enzyme](#test-react-with-enzyme)
- [Summary](#summary)
    - [**Testing Approach**](#testing-approach)
    - [**Tested**](#tested)
    - [We'll Test](#well-test)
- [Testing Connected React Components](#testing-connected-react-components)
    - [Two goals](#two-goals)
    - [Testing Container Components](#testing-container-components)
    - [Testing Connected Components](#testing-connected-components)
    - [we get an error, solution are:](#we-get-an-error-solution-are)
        - [wrap the root component in a `<Provider>`](#wrap-the-root-component-in-a-provider)
        - [Update our component to export the raw unconneted version](#update-our-component-to-export-the-raw-unconneted-version)
- [Testing mapStateToProps](#testing-mapstatetoprops)
- [Testing Action Creators](#testing-action-creators)
- [Testing Reducers](#testing-reducers)
- [Testing Thunks](#testing-thunks)
- [Testing the Redux Store](#testing-the-redux-store)
    - [Writing an automated test of the Redux store](#writing-an-automated-test-of-the-redux-store)
    - [Integration Testing the Store](#integration-testing-the-store)
- [Summary](#summary)
    - [Tested](#tested)
    - [Setup production build process](#setup-production-build-process)
    - [Convention](#convention)
    - [Production build process](#production-build-process)
- [Setup Production Redux Store](#setup-production-redux-store)
- [Setup Webpack](#setup-webpack)
- [Setup HTML Build](#setup-html-build)
- [Setup dist server](#setup-dist-server)
- [Setup npm Scripts](#setup-npm-scripts)
    - [package.json](#packagejson)
    - [use gzip with express](#use-gzip-with-express)
- [Final Challenge](#final-challenge)
- [Summary](#summary)
    - [Production build mattes](#production-build-mattes)

## Introduction

### To learn on this course
- Lint Code and Test
- Transpile ES6 to ES5
- Bundle and Minify
- Start up a Web Server
- Hot Reload Changes

### Why Redux?

- One Store 
    - Easier to understand
    - Avoids complexity of handling interactios
- Reduced Bolierplate: top-;eve; container components are subscribed to the Redux store
- Isomophic/Universal Friendly
- Immutable Store: performance
- Hot reloading: instantly see changes without losing your current client-side state
- Time-travel debugging
    - step forward and backwards throught state changes 
    - replay interactios
- Small Api
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
- web page `editorconfig.org`
```
// .editorconfig
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
- npm Scripts: tying all this together## React Component Approaches

- React Component creation approaches
- Container vs Presentational Components

## Four+ Ways to Create React Components?!

- ES5 createClass
- ES6 class
- ES5 stateless function
- ES6 stateless function
- Many more...

## ES5 Class Component
```js

var HelloWorld = React.createClass({
    render: function() {
        return (
            <h1> Hello World </h1>
        );
    }
});

```

## ES6 Class Component

### React in ES6
- No autobind

    ```html
    //Works fine with ES5 createClass
    <div onClick={this.habdleClick}></div>
    ```

    ```html
    //Requires explicit bind with ES6 Class
    <div onClick={this.habdleClick.bind(this)}></div>
    ```

    #### Recomended

    - Bind the function to 'this' in the constructor
    ```js
    class Contacts extends React.Component{
        constructor(props){
            super(props);
            this.handleClick = this.handleClick.bind(this);
        }
    }
    ```

- PropTypes declared separately

- Default props declared separately

    - If you're willing to utilize experimental class fields and static properties, you can declare them withing your class
    - You have to enable Stage 1 suppor to this in babel

- Set initial state in constructor 

## ES5 Stateless Component

```js 
var HelloWorld = function(props){
    return(
        <h1> Hello World </h1>
    );
};

```

## ES5 Stateless Functional Component

- const to avoid our component is accidentaly reasigned
```js 
const HelloWorld = (props) => {
    return(
        <h1> Hello World </h1>
    );
};

```
### Stateless Functional Components: 9 Benefits

- No class needed
- Avoid 'this' keyword
- Enforce best practices
    - used for dumb presentational components
    - Presentational componets focused on the UI rather than the behavior
    - Avoid use state in presentational components
- High signal-to-noise ratio (less typing)
    - Can use a single linet return statement
- Enhance code completion/ intellisense
- Bloated components are obvious
- Easy to understand
    - takes props
    - spit html
- Easy yo test
- Performance

## When Should I Use Each Style?

- Stateless does not actually create a component instance (ref will return null)
- Nested functions in stateless comp can hurt performance, because every render creates a new instance of that function
- If needed a nested funtion in the stateless component you can should convert it to a calss-based component

| **Class Components** | **Stateless Components** |
|-------|-------|
|State|Everywehere else :smile:|
|Refs to underlying DOM||
|Lifecycle Methods||
|Child functions (for performance)||

## Other Ways to Create Components 

- Object.create
- Mixins
- Parasitic Components
- Stamplt

[More info](bit.ly/react-define-component)

## Container vs Presentation Components

### Container

- Concerned with behavior, marshalling data and actions
- Backend of the frontend
- Concerned with passing data and actions down to their children (presentation components)
- Know abour Redux, have redux-specific code inside for dispatching actions to the store and connecting to the store via connect.
- Often stateful 'couse they need to manage state
### Presentation

- Should not have login inside
- Receives functions and data tha ther need froma container component
- Typically know nothing about redux
    - make them more reusable and easier to understand
    - just rely on props to display UI 
    - have no dependencies on the rest of the app (redux, actions, stores)
    - Does NOT specify how the data is loaded or mutated 
- Typically functional components have no need for state

| **Container Components** | **Presentation Components** |
|---|---|
|Little to no markup|Nearly all markup|
|Pass data and actions down|Receive data and actios via props|
|Knows about Redux|Doesn't know about Redux|
|Often stateful|Typically functional components|

- Most Components should be Presentation Components

### Alternatve Jargon

| **Container Components** | **Presentation Components** |
|---|---|
|Smart|Dumb|
|Stateful|Stateless|
|Controller View|View|

> ` "When you notice that some components don't use props they receive but merely forward them down.. it's a good time to introduce some container components." - Dan Abramov`


## Summary 

- ES5 createClass
- ES6 Class
- ES5 Stateless Function
- ES6 Stateless Function
- Many more!
- Container vs Presentation Components# Initial App Structure

## Intro
- Create our first pages
- Create layout
- Configure routing
- Setup navigation

## Create initial Components

### Home component

```js 
import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron"> 
                <h1>Pluralsight Administration</h1>
                <p> React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        );
    }
}

// this say when some import this component they will say import 
// HomePage from HomePage and the will get a reference to
// the HomePage class 
export default HomePage;
```

### About component

```js 
import React from 'react';

// using class component for the limintation of hot reloading 
// where hot reloading does no work on function components
// if it does not have a parents as a class component 
class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <p>This application uses React, Redux, React Router and a variesty of other helpful libraries</p>
            </div>
        );
    }
}

export default AboutPage;
```

## Create App Layout

Parent component that haouses any markup that we want to display on every page, such as a header or a footer
App.js in the root of the component folder

- React router will passing child components as properties onto our app component, and they will be composed right here on the page.

```js
import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <p> Header here.. </p>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
```

## Configure Routing

- create route.js in the route of our source file

    ### IndexRoute

    - Use then there is just a root path that we want to expose.
    - If somebody go to / path i will load the referenced page in this case HomePage

    ### App component 

    - will always be loaded by placing it at the top like 
        - ` <Route path="/" component={App}> `


```js
import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/home/AboutPage';

export default (
    // with this we say always load the app component and then nest 
    // these other items, pass them as children basend on our routing
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
    </Route>
);

``` 

- if /HomePage will be pass to out app component and will end up composed in App.js in the {this.props.children}

## Update Entry Point 

- need to update our app entry point which is index.js
- to do so we need to import router from react router

```js
// for those features that babel cannot transpile you use polyfill  
import 'babel-polyfill';
import React from 'react';
// we have to pull it everytime we are making web development,
// so we have a render function that works in the browser
import {render} from 'react-dom';
// choose a way to handle history in React Router 
// browserHistory gives us nice and clean urls
// use push-states behind the scene
import { Router, browserHistory } from 'react-router';
// we reference our routes.js file
import routes from './routes';

// thanks to web pak we can import css just like we do JavaScript
// and it will end up bundling these files for us intelligently 
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render (
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);


```

## Create Header


```js
import React from 'react';
import PropTypes from 'prop-types';
import {Link, IndexLink } from 'react-router';

// activeClassName feature comes with Link and IndexLink
// activeClassName when this link is active go ahead an apply this class for me 
const Header = () => {
    return (
        <nav>   
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            //simple layout a pipe between links
            {" | "} 
            <Link to="/about" activeClassName="active">About</Link>
        </nav>
    );
};

Header.propTypes = {};

export default Header;
```

## Create Course Page

- Add the folder course and CoursesPage.js
- Add the route to routes.js
- Add the link to Headers.js

## Summary 

- Foundation, Complete!
- Create React components
- Setup React Router# Intro To Redux

## Intro 
- Do i need Redux?
- 3 Principles
- Flux vs Redux
- Redux Flow

## Do i need Redux?

- Vanilla JS: Simple app 
- JQuery: Manipulate DOM, Make AJAX calls, handle interactivity
- React: 
    - writting in vanilla js or jQuery gets painful
    - manage increasing  complexity in  our apps

#### IF:

- Data flow get more complex
- Display the same data in multiple places
- Have large number of potential state changes are hard to manage
- May Find helpful to handle state changes in a single spot
    - for consistency
    - testability
    - and your own sanity

### When Do I Need Redux

- Complex data flows
- Inter-component communication
- Non-heirarchical data
- Many actions
- Same data used in multiple places 

> `"...if you aren't sure if you need it, you don't need it."`

## Three Core Redux Principles

### **One immutable store**
- all aplications states are here (state can't be changed)
- aids debugging
- supports server rendering
- makes things like undo/redo easily possible

### **Actions trigger changes**
- only way to mutate state is to emit an action, which describes a user's intent.

### **Reducers update state**
- State is changed by pure functions
- Called reducers 
- Accepts the current state and returns a new state. 


## Flux Similarities

``` 
Data flows down 
Actions flow up 
```

- Enforce uniderctional data flows
- Define actions of how state can be change
    - action creators
    - action types 
- Stores as state
    - Redux has a single store
    - Flux allows multiple

## Flux Differences

### Redux New Concepts

#### **Reducers**

- function that take the current in a action and then return a new state
- pure functions

#### **Containers**

- React components
- their use is specific
- contain the necessary logic for marshalling data and actions

### **Immutability**


### Flux vs Redux

#### Flux

Action -> Dispatcher ->  Store -> React -> Action

- Stores are notified by the dispatches
- Flux uses a singleton dispatcher to connect actions to stores
- Stores use EventEmitter to connect to the dispatcher
- Each stores tha wants to know about actions need to explicity connect itself to the dispatcher typically using EventEmitter

#### Redux

Action -> Store -> React -> Action
          <-> Reducers

- Relies on pure functions called reducers
- Does NOT need a dispatcher
- Pure functions are easy to compose so no dispatches is necessary 
- Each actions is ultimately handled by one or more reducers which update the single store
- Since state is immutable in redux, the reducer returns a new updated copy of state, which updates the store. 

##### reducer
- how state should change by a given action
- accpets the current state and returns an action

|**Flux**|**Redux**|
|--|--|
|Stores contain state and change logic|Sore and change logir are separete|
|Multiples stores (User,Product store)|One store (simplicity, avoid repeat data, communication between stores)|
|Flat and disconnected stores (comunicate with WaitFor function)|Single store with hierarchical reducers (reducers can be nested via functional composition, just like react components)|
|Singleton dispatcher (connect actions to the store)|No dispatcher (single store just passes actions down to the reducers tha you define)|
|React components subscribe to stores (using OnChange handlers and EventEmitter)|Container components utilize connect (react-redux connect your react components to the Redux store automatically)|
|State is mutated (manipulate state directly)|State is immutable (return update copy state rather than manipulatin it directly)|
 

#### React-Redux 

- Contains a Connect method which generates a top-level React component that's connected to your actions and store. 
- Every time the store's state changes, it calls a function that trigger a re-render on the component

## Redux Flow Overview

Lets look at how actions, reducers, the sotre, and container component will interact to create uniderectional dataflow

Action
- Describe user intent
- object witha type propery (require) and some data 
- example `{ type: RATE_COURSE, rating: 5 }`

Reducer
- handle actions
- function that returns a new state
- Typically contains a switch statement that checks the type of the action passed, this determines what new state should be returned
- SWITCH  determines what new state should be returned
- Once this is new state is returned from a reducer, the store is updated.

```js
function appReducer (state = defaultState, action){
    switch(action.type){
        case RATE_COURSE:
        // return new state
    }
}
```

React

- re-renders any components that are utilizing the data
- react-components are connected to the store using React-Redux

``` 
Notified via React-Redux
```

## Summary 

- If you need Redux, you'll know it
- 3 Principles
    - Immutable Store
    - Actions trigger changes
    - Reducers return updated state
- Flux vs Redux
- Unidirectional Redux Flow## Intro

- Actions
- Store
- Immutability
- Reducers (how handle state updates)
 

## Actions

- event happening in the applications are called actions
- actions are just plain objects containing a description of an event
- must have a type propertie 
- should pass any serializable to json NOT functions or promises

### Action Creator

- typically actions creator have the same name as the action type
- Considered convenience functions because they're not required
- by using actions creator to create your actions, the spot where you dispatched the actions does not nedd to know the action creator structure.
- Whean actions are disparched, it ultimately affects what data is in the store

```js
rateCouse(rating){
    return { type: RATE_COURSE, rating: rating }
}
```

## Store


### Creating Redux Store

- calling createStore in the application's entry point  
- pass the createStore funtion to your reducer function

```js
let store = createStore(reducer);
```
- honors single responsibility principle 
- store simple stores data
- having a sige source of truth makes the application easier to manage and understand

### Redux Store

- store.dispatch(action)
- store.subscribe(listener)
- store.getState()
- replaceReducer(nextReducer)
    - useful to support hot reloading 

- there is no api for changing data in the store
- the store does not handle the actions that you dispatch

## Immutability

- instead of change the object you must return a new object that represents your application's new state

### What's Mutable in JS?

|**Immutable already!**|**Mutable**|
|--|--|
|Number|Objects|
|String|Arrays|
|Boolean|Functions|
|Undefined||
|Null||

```js
//Current State
state = {
    name: 'Cory House',
    role: 'author'
}

//Traditional App - Mutating State
state.role = 'admin'
return state;

//Returning new object. Not mutating state!
return state = {
    name: 'Cory House'
    role: 'admin'
}
```

### Create copies objects in javascript

- multiples way
- recomended Object.assign

#### Signature

```js
Object.assign(target, ...sources)
```
#### Example
- first param is the target
- then accepts as many source objects as you want

```js

Object.assign({}, state, {role:'admin'});

//specif

```
##### Description
```
Object.assign(
    empty-object, 
    mixing new object with our existing state, 
    changing role propertie to admin
    );
```

- Result is a statement effectively clone of our existing state object but with the role admin
- the fist parameter SHOULD BE AN EMPTY OBJECT
- if it does not have the empty object you will end mutating the state instead of creating one 
- need to use BABEL-POLYFILL

## Why Immutabiity?

- Clarity
- Perfomance
- Awesome Sauce


### Clarity

- "Huh, who changed that state?"
    - we know exactly where and how it happende
    - we're clear about what file to open to actually see state changes
    - Redux handle all state changes

### Performance 


```js
state = {
    name: 'Cory house'
    role: 'author'
    city: 'Kansas City'
    state: 'kansas'
    country: 'USA'
    ...
}
```
- redux can simply do a reference comparison
- if the old state isnt referencing the same object in memory then we know that the state has changed. (this is extremely efficient)
    ```js 
    if (prevStoreState !== storeState) ... 
    ``` 
- use the `shouldComponentUpdate` method to quicky bail out if nothing has changed
- React-Redux make your app more predictable and easier to reason about and improve performance

### Awesome Sauce (amazing debugging experience)

- Redux devtools extension in Chrome
- Time-travel debugging
- Undo/Redo
- Turn off individual actions
- Play interactions back

## Handling Immutability

### Handling Immutability State

- JavaScript's primitives are immutable

#### ES6

- Object.assign
- Spread operator

#### ES5

- Lodash merge
- Lodash extend
- Object-assign (on npm)

#### Libraries

- react-addons-update
- Immutable.js

### How do i enforce immutablility?

### Trust 

- teach the team to not mutate the state
- if someone does it will introduce a bug

### redux-immutable-state-invariant      

- displays an error if you try to mutate the state anywhere in your app
- be sure to do this just in dev becouse i would degrade performance in production

### Immutable.js

- creates immutable javascript data structures


## Reducers

- to change the store, you dispatch an action that is ultimately handled by a reducer

### What is a Reducer?

- its a funtion that takes state and an action and returns new state.

- `(state,action) => state`
```js
function myReducer(state,action){
    //return new state based on action passed
}
```

- Example incrementing counter
    ```js
    function myReducer(state,action){
       switch (action.type){
           case 'INCREMENT_COUNTER':
                //this mutate state
                //state.counter++;
                //return state;

                //this returns a copy
                return(Object.assign(
                    {},
                    state,
                    {counter: state.counter + 1})
                );
       }
    }
    ```
- Reducers must be pure functions

### Forbidden in Reducers

- Mutate arguments
- Perform side effects
    - API calss
    - routing transitions
- Call non-pure functions
    - date.now
    - math.random

- 1 Store. Multiple Reducers
- Manage slices of your state chenges via multiple reducers.    

### All Reducers are called on each dispatch

- All reduces must return untouches states the default if no switch case matched
- Only reducers that handle the type will do anything 
- Other reducer will return the state that was passed to them

### Reducer = "Slice" of state

- Each reducer handles its slice of state
- Each reduces is only passed its slice of state that only access the portion of state that it manages
- Multiple reducers allows youto handle changes to different pieces of the store in isolation
- makes state changes easy to understan and avoids issues with side effects
- all reducers together form the complete picture of what's in your store


> `"Write independent small reducer functions that are each resposiblefot updates to a specific slice of state. We call this pattern "reducer composition". A given action could be handled by all some, or none of them."`

## Summary

#### Actions
- Represent ser intent
- Must have a type

#### Store
- dispatch
- subscribe
- getState
- replace Reducer

#### Immutability
- Just return a new copy

#### Reducers
- Must be pure (no side effects)
- Multiple per app
- Slice of state
## Intro

- Container vs Presentation Components
- React-Redux
    - Provider
    - Connect
- A Chat with Redux


## Container vs Presentational Components

### Two Component Types

- presentational components are not tie to an specific behavior, it sbehavior is passed down from a container component via props 
- Container componente sis just a React coponent that uses store.subscribe to read part of the Redux state tree and supply props to child components

|**Container**|**Presentational**|
|--|--|
|Focus on how things work|Focus on how things look|
|Aware of Redux|Unawere of Redux (recive data and actions via props)|
|Subscribe to Redux State|Read data from props|
|Dispatch Redux Actions|Invoke callbacks on props (fire up actions by the callbascks passed down via props)|
|Generated by react-redux|Written by hand|

## React-redux introduction

- react-redux handles {store ->r react} in the flow
- react-redux ties your react components together with redux

|**Provider component**|**Connect component**|
|--|--|
| Attaches app to store| Creates container components|

### Provides component

- Attaches app to store
- is utilized at your aplication's root.
- wraps the entire application
- attaches the application to the redux store
- theorically you dont need to use the provider component 
- so provider make the store available to all your components automatically
- You only need to used once when you render your root the component 
```js
<Provider store={this.props.store}>
    <App/>
</Provider>
```
> `React's context: Useful for library authors. Dangerous for you.`

### Connect

- Creates container components
- wrap our component so its connected to the redux store
- connects your react component to the store so the functions is certainly named well 

```js
function mapStateToProps(state, ownProps){
    return {appState: state.authosReducer };
}
// pass connect two functions


export default connect(
    mapStateToProps, // specifies the state you want to expose to your component
    mapDispatchToProps // specifies the actions you want to expose
)(AuthorPage);
```
- in redux nearly all your components can be stateless functional componets if you'd like 

Benefits:
- No manual unsuscribe
- No lifecycle methods required
- Declare what subset of state you want 
- Enhanced performance for free ( your component only renders when the specific data you've connected changes)

## mapStateToProps

- useful for defining what part of Redux store you want to expose on your component
- when you define this function, the component will subscribe to redux store updates
- Any time it updates, mapStateToProps will be called 
- returns an object
- each property on the object you define will become a property on your container component 
- Determinates what state is available on your container component
- Logical place to filter or, otherwise, transform your state so its most conveniently shaped and sorted for you components use.

```js
// in a simple app you may have one reducer and one container component
// when grow up you may like to create diferent components to manage different pages or sectios of your app
// different reducers to different sections of the store
function mapStateToProps(state){
    return {
        appState: state
    };
}
```

- makes all of your state accessble to the component via props.
- `this.props.appstate`: within the component to acces any state that is handled by my appstate reducer.
- expose part of my store's state to the component via props like this:
    ```js
        appState: state
    ```
    - each object will become a prop on my component

- every time the component is updated, the mapStateToProps function is called

### Reselect

- `Memoize for perfomance`: about keeping track of the result of each function call so that the function does not have to run angain if tis already been run with the same parameters
    - to avoid heavy functions every time mapStateToProps is called 
    - like caching for function calls 
    - reselect just check whether it's already been called with specified parameter, and if it has, it doenst call the  function. instead, it just returns the memoized valued instead.


## mapDispatchToProps

- Let us specify what actions we want to expose as props
- Determines what actions we want to expose to our component instead of what state
- Receives disparch as its lone parameter
- Returns the callback props that you want to pass down 
```js
function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(actions,dispatch)
    };
}
```


### 3 Ways to Handle mapDispatchToProps

- Expose your actions to your components

#### Ignore it. Use dispatch

- `this.props.dispatch(loadCourses());`
- when omit it, then the dispatch function will be attached to your container component.
    - this mean you can call dispatch manually and pass it an action creator.

##### Example

- adds a dispatch prop to your component
```js
// In component...
//use this dispatch prop to call your action creator 
this.props.dispatch(loadCourses())
```
Two downsides
- Boiler plate: takes more code to dispatch an action 
- Redux concerns in child components: make this component to tying to redux


#### Manually wrap

- in dispatch calls within the mapDispatchToProps function
- wrapping the creator in a function that calls dispatch
- kepps the calls in my actual component shorter at the cost of some extra coding here in mapDispatchToProps


```js
function mapDispatchToProps(dispatch){
    return {
        loadCourses: () => {
            dispatch(loadCourses());
        },
        createCourses: () => {
            dispatch(createCourses());
        },
        updateCourses: () => {
            dispatch(updateCourses());
        }
    };
}

// in component...
this.props.loadCourses()
```

- quite redundant

#### Use bindActionCreators

- convenience function that wraps your action creator in dispatch calls for you
- handle the redundancy 
- wrap all the actions pass to it in a dispatch call for you 
- the prop exposed is called actions
```js
function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(actions, dispatch)
        // wraps action creatos in dispatch call for you!
    };
}

// In component
this.props.actions.loadCourses()
```

- does what we do in option 2 automatically


- with options 2 and 3 your child components do NOT have to know anything about redux
- child components can simply call the actions that are passed down to them via props 

## A Chat with Redux

1. `React`: Hey CourseAction, someone clicked this `Save Course` button.

2. `Action`: Thanks React! I will update/dispatch an action so reducers that care can update state.

3. `Reducer`: Ah, thanks action. I see you passed me the current state and the action to perform. I will make a new copy of the state and return it.

4. `Store`: Thanks for updating the state reducer. I will make sure that all connected components are aware.

5. `React-Redux`: Woah, thanks for the new data Mr. Store. I will now intelligently determinate if i should tell React about this change so that it only has to bother with updating the ui if its necessary.

6. `React`: Ooo! Shiny new data has been passed down via props from the store! I will update the UI to reflect this!. 


## Summary

- Container vs Presentation Components
    - Container style to redux
    - Presentation compnentes know nothing about Redux
- React-Redux
    - connect our component to Redux wrapping the app in the provider component and connecting our container to Redux store 
    - Provider
    - Connect
        - mapStateToPropss
            - what state we want to expose via props
        - mapDispatchToPropss
            - what actions we want to expose via props## Intro

- Simple create course form
- Actions
- Action Creators
- Store
- Reducers
- Container Components

## Create Simple Add Course Form

- Update our state effectively every time that somebody presses a key when their focused on our title input field

```js
import React from 'react';
import PropTypes from 'prop-types';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: {
                title: "" // populate it with something else than null
            }
        };
        
    }

    onTitleChange(event){
        const course = this.state.course; 
        // our function is inheriting the `this` context of the caller, which in this case is the change chandler
        // this needs to be bound to the instance of our component

        course.title = event.target.value;
        this.setState({course: course});
    }
    render() {
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add Course</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title}/>
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

CoursesPage.propTypes = {};

export default CoursesPage;

```

## Binding in ES6


1. binding them to the this of our course page component in the constructor [BEST] 
    ```js
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);]
    ```

2. binding it in the render
    ```js
    onChange = {thisn.onTitleChange.bind(this)}
    ```
    - down side in performance
    - causes a new function to be created on each render


## Actions

- This file is going to hold our course-related actions creatos
- creates actions 
- convenience function, returns an action
- only requirement of an actions is that it has a type property
```js
export function createCourse(course) {
    return { type: 'CREATE_COURSE', course};
}
```
- in ES6 we can omit the right-hand side if it matches the left-hand side
    -  ```js 
        { type: 'CREATE_COURSE', course:courses} 
        ```
    -  ```js 
        { type: 'CREATE_COURSE', course} 
        ```


## Reducers

- accepts a state and a action and returns a new state 

```js
export default function courseReducer(state = [], action) {
    switch (action.type) {
        case 'CREATE_COURSE':
            // [WRONG] immutable state
            // state.push(action.course);
            // return state;
            // [CORRECT] Spread operator
            return [
                ...state, // representng our existing array and expoloding ir out, taken all the values in it and defined them here inline
                // return a new instance of our state array
                Object.assign({}, action.course)
            ];
    
        default:
            return state;
    }
}

```
- other choices instead of a big switch
    - if statements
    - lookup table of functions
    - create function that completely abstact this away
- point each reducers handles an specific slice of state 
- reducers let you slice up the management of your store's state changes into a number of separate functions 
- for this specific actionTypes, i wan to peform some functions.


## Root Reducer

- since it is export a default you can alias it however you want
```js

// root reducer
import {combineReducers} from 'redux';
//since it is export a default you can alias it however you want
import courses from './courseReducer';

const rootReducer = combineReducers({
    // the property/name supplied here will impact the way i access the state thorughtout my application
    courses // short hand property name
    // courses: courses
}); 

export default rootReducer;

```

- the property/name supplied here will impact the way i access the state thorughtout my application
- in the container component will be saying state.courses


## Store

- initialState: good for server side rendering

```js
import {createStore} from 'redux';
import rootReducer from '../reducers';

//accepts the initial state for your app

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState
    );
}

```

### Enhancing store with a middleware

```js
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';

//accepts the initial state for your app

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        // third parameter accepts applyMiddleware function here we
        // can pass in all the middleware we would like to utilize in our application
        // we want to apply reduxImmutableStateInvariant
        applyMiddleware(reduxImmutableStateInvariant(),othermiddleware) 

        //reduxImmutableStateInvariant() make sure it have the () so it invoke within reduxImmutableStateInvariant our applyMiddleware fuction 

        //react Slingshot for example of how configure other pieces of middleware 
    );
}

```

## Instatiate Store and Provider

### Store
- Currenty, our reducer already sets its initial state using an ES6 default parameter

    ```js 
    index.js
    import configureStore from './store/configureStore';
    ```

- we create a instance of our store
- initial state is an optional parameter
- if you are creating a server render app you might choose to do so
- if we passed we will overriding the default parameter we specify in our reducer
    ```js 
    const store = configureStore();
    ```
- When we should pass it?
    - if you're wanting to rehydrate your store using some separate state that's passed down from the server or stored in local storage


### Provider

- higher order component that attaches our store to our React container components
    ```js
    import Provider from 'react-redux';
    ```

- set it on the render
- provider just take a props which is the store
    ```js
    render (
        <Provider store={store} >
            <Router history={browserHistory} routes={routes} />
        </Provider>,
        document.getElementById('app')
    );
    ```

- provider component accept store as props and just wraps our Router component
- provider component is wrapping our entire application so that it can be connected to our Redux store
- becouse our app is now wrapped in the Provider component, we'll be able to acces our Redux store in our components

## Connect Container

- import connect function

    ```js
    import {connect} from 'react-redux';
    ```

- instead of export a plain component we export a component that is decorated by the React-Redux connect function.
- the connect function is what we use to create components that can interact with Redux (container components)
- connect is higher-order component that's going to wrap our CoursePage
    ```js
    //export default CoursesPage;
    export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
    // alternative set up
    const connectedStateAndProps = connect (mapStateToProps, mapDispatchToProps);
    export default connectedStateAndProps(CoursePage);

    ```
- the two function calls is: connect function here returns a function and that functions immediately calls our container component

### mapStateToProps

- own props lets us access props that are being attached to this component, reference to component owns props
- define an object that returns the property we would like to see expose in our component
```js
function mapStateToProps(state,ownProps) {
    return {
        courses: state.courses
        //now im accesing the course data in our redux store 
    };
}

```
- .courses this is determinated by the choise we do in or reducer

### dispatch

```js
import * as courseActions from '../../actions/courseActions';
onClickSave() {
    // alert(`Saving ${this.state.course.title}`);
    this.props.dispatch(courseActions.createCourse(this.state.course));
}
```


```js

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: {
                title: ""
            }
        };
        //binding them to the this of our course page component

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave() {
        // alert(`Saving ${this.state.course.title}`);
        this.props.dispatch(courseActions.createCourse(this.state.course));
    }

    courseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }
    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title}/>
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state,ownProps) {
    // own props lets us access props that are being attached to this component
    // define an object that returns the property we would like to see expose in our component
    return {
        courses: state.courses
        //now im accesing the course data in our redux store 
        // .courses this is determinated by the choise we do in or reducer
    };
}

// export default CoursesPage;
// export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
export default connect(mapStateToProps)(CoursesPage);

```
## Step Through Redux Flow

### Some errors
-  'dispatch' is missing in props validation     react/prop-types
-  'courses' is missing in props validation      react/prop-types
-  'courses.map' is missing in props validation 

- you can set some validations 

```js

CoursesPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
};

```
Action       -> Reducers ->     React
actionCreator ->
createCourse -> courseReducer -> mapStateToProps (inject data) -> render

## mapDispatchToProps Manual Mapping

- in arrow functions u can omit the parentheses for the arguents when there is a single parameter

```js

function mapDispatchToProps(dispatch) {
    // this dispatch will get injected in by the Connect function
    return {
        createCourse : course => dispatch(courseActions.createCourse(course)) 
    };
}
```
- wraping our action in a call to dispatch so that it's easy to use above
- and we can say now

    ```js
    this.props.createCourse(this.state.course);
    ```

- ``` Required prop `dispatch` was not specified in `CoursesPage`.```
    - dispatch is no longer injected as a property now that we defined mapDispatchToProps
    - once we started defining the mapDispatchToProps function, connect will no longer add a dispatch property on our component 

    ```js
    CoursesPage.propTypes = {
    //dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    createCourse: PropTypes.func.isRequired
    };
    ```

    - we use it here

    ```js
    createCourse : course => `dispatch`(courseActions.createCourse(course)
    ```

#### Code example

```js
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: {
                title: ""
            }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave() {
        this.props.createCourse(this.state.course);
    }

    courseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }
    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title}/>
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    createCourse: PropTypes.func.isRequired
};

function mapStateToProps(state,ownProps) {
    return {
        courses: state.courses
    };
}


function mapDispatchToProps(dispatch) {
    return {
        createCourse : course => dispatch(courseActions.createCourse(course)) 
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
```

## bindActionCreators

- save us from having to manually wrap our action  creators in a dispatch call  
- will go through my courseActions and find all the actions in that file and then wrap them in a call to dispatch

    ```js 
    function mapDispatchToProps(dispatch) {
        return {
            actions : bindActionCreators(courseActions,dispatch)
        };
    }
    ```
- this way the actions sit on this.props.actions 
- update the PropTypes validation in our component
    

- can be done, not recommended
    ```js
    createCourse : bindActionCreators(courseActions.createCourse,dispatch)
    ```
#### Code Example
```js
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: {
                title: ""
            }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave() {
        this.props.actions.createCourse(this.state.course);
    }

    courseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }
    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title}/>
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state,ownProps) {
    return {
        courses: state.courses
    };
}


function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators(courseActions,dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
```

## Container Structure Review

### First Constructor

- we initialize state
- call our bind functions
- any functions that need to be bound to the `this` context, this is the best place to do so

```js
constructor(props, context) {
    super(props, context);
    this.state = {
        course: {
            title: ""
        }
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
}
```

### Child functions 

- that are called by render

```js
onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
}

onClickSave() {
    // alert(`Saving ${this.state.course.title}`);
    this.props.actions.createCourse(this.state.course);
}

courseRow(course, index){
    return <div key={index}>{course.title}</div>;
}
```

## Render functions

- where we would typically just be calling a child component
- markup inline in this case
- recommend keeping the markup separate
- container components ideally just call a child component that contains that markup

```js
render() {
    return (
        <div>
            <h1>Courses</h1>
            {this.props.courses.map(this.courseRow)}
            <h2>Add Course</h2>
            <input
                type="text"
                onChange={this.onTitleChange}
                value={this.state.course.title}/>
            <input
                type="submit"
                value="Save"
                onClick={this.onClickSave} />
        </div>
    );
}
```

## propTypes

- provide our prop type validation

```js
CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};
```

## Redux Connect and related functions

- call to connect
- mapStateToProps function
- mapDispatchToProps function

```js
function mapStateToProps(state,ownProps) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators(courseActions,dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
```

## Action Type Constant

### Options

#### Constants File
- constants file inside where all your actionType constants are stored in a single spot
- downside other file you have to open and edit every time you create a new action

#### Constants withing the actions File
- placing your constants withing your actions file
- more convenient
- downside
    - first, it would add noise to my courseActions file
    - what to use constanst like CREATE_COURSE = 'CREATE_COURSE'

#### actionType File

- in action folder `actionType.js`

```js
export const CREATE_COURSE = 'CREATE_COURSE';
```
- using it
```js

//actions
import * as types from './actionTypes';
return { type: types.CREATE_COURSE, course};

//reducer
import * as types from '../actions/actionTypes';
case types.CREATE_COURSE:
```


## Summary

### Redux Flow
- Action
- Store
- Reducer
- Container Component## Intro

- Why a mock API?
- Async libraries
- Implement Thunks

## Why a mock API?


- Start before the API existm,
    - First, this pattern allows you to start development immediately, even if the APIs that you need to comsume haven't been created yet.
    - as long as you can agree with the API team on the shape of the data that the final API will return

- Independence
    - helps move independently when a separate team is handling the web APIs
    - not related to the developers developing code in order to build the UI 
    - if i'm also building the APIs, then i get to decide when to do so.
     its effectively the rule of coding to an interface rather than an implementation

- Backup Plan
    - dont have to stop development
    - can just point  to the mock API and keep working

- Ultra-fast
    - can count on all responses being instantaneous if you like
    - not hampered by slow or unreliable API calls in the early stages of development

- Test slowness
    - allows you to control the speed of responses 
    - can get a feel how the app performs really slow or really quick 

- Aids testing
    - jandy tool for automated testing
    - since the data is local its both fast and realiable. dont have to mock calls since your mok api is already mock
    - since the data is deterministic you can even write test that utilize the data, and the wont be slow since the tests are local.    
    - All data is sitting in memory 

- Poin to the real API later
    - point to the real API by changing the import at the top of your file
    - you could even check a centrilzed config that allow yu to toggle between the mock and real APISs via single setting

## Async Library Options

### Async
Redux
- actionsare synchronous and must return an object

|Flux|Redux|
|--|--|
|Handed in action|?|

### Redux Async Libraries

#### redux-thunk
- allow return funtions from you action creators intead of object

#### redux-promise
- new alternative middleware library that uses Flux standard actions to bring clear conventions to async calls
- least popular of the three

#### redux-saga
- uses ES6 generators and offers an impressive amount of power with what's bassically a rich domain-specific lenguage for dealing with asynchrony.


### Comparasion

|Thunks|Sagas|
|--|--|
|functions: return functions instead of objects, wraps an asynchronous operation in a function|generators: functions that can be paused and resumed later|
|Clunky to test:have to mock api calls, not easy hooks for observin and testing individual steps in the asynchronous flow|Easy to test: assert on their effectcs because they simply return data, dont mock anything, test are generally more readable and clear|
|Easy to learn|Hard to learn: generators and a rather large API|

#### Generators

- functions that can be paused and resumed later
- contain multiple yield statments
- at each yield, the generator will pause

## Thunk Overview

- normally we only return objects from our action creators
- with redux-thunk  we can return a function
- thunk is a computer science term
- thunk is a function that wraps an expression in order to delay its evaluation

### Example
- deleteAuthor function is wrapping our dispatch function so that dispatch can run later
```js   
export function deleteAuthor(authorId)
{
    //return function
    return dispatch => {
        return AuthorApi.deleteAuthor(authorId).then(()=>{
            //calling regular action creator called delteAuthor
            dispatch(deleteAuthor(authorId));
        }).catch(handleError); 
    }
}
```

## Mock API Setup

- create api folder with the code in it



## Add Thunk to Store

- "How we handle asynchronous calls like AJAX calls to an API?"
- add thunk to our configure file
```js
import thunk from 'redux-thunk';
applyMiddleware(thunk,reduxImmutableStateInvariant())
```

> there are other middlewares for loggin, scheduling actions and sending crash reports when issues occur

## Create Load Courses Thunk

### Load courses when the app initially loads

- a thunk always return a function that accepts a  dispatch
- this return a promise so i can handle it here
- return couldBeAnAjaxCall.then(courses => {
- handling errors could be by a dedicated action creator
- with this approach we only have to change the import to the real api

```js
import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses};
}

export function loadCourses(){
    return function (dispatch) {
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}
```

## Action Naming Conventions

- suffix of success: this action does NOT fire until all authors have been successfully returned
- people often create a corresponding failure action type called loadCoursesFailure or loadCoursesError

## Load Courses in Reducer

```js
import * as types from '../actions/actionTypes';
export default function courseReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
    
        default:
            return state;
    }
}
```

## Dispatch Action on Page Load

- go to the entry point
- once the store is configure we can go ahead and dispatch actions agains the store

```js
store.dispatch(loadCourses());
```

## Create Course List Component

- create two presentational components

```js
//CourseList.js
// presentational component
import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

// const CourseList = ({courses, deleteCourse}) => {
const CourseList = ({courses}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                </tr>
            </thead>
            <tbody>
            {courses.map(course => 
                <CourseListRow key={course.id} course={course} />
            )}
            </tbody>
        </table>
    );
};

CourseList.propTypes = {
    courses: PropTypes.array.isRequired
};

export default CourseList;
```
- this could be done online 
```js
//CourseRow.js
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CourseListRow = ({course}) => {
    return (
        <tr>
            <td><a href={course.watchHref} target="_blank">Watch</a></td>
            <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
        </tr>
    );
};

CourseListRow.propTypes = {
    course: PropTypes.object.isRequired
};

export default CourseListRow;
```

```js
//coursePage.js
class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    courseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }
    render() {
        const {courses} = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={courses} />
            </div>
        );
    }
}
```

## Summary

- Thunks, Redux-Promise, and Sagas
- Naming async acitons
    - Consider SUCCESS and ERROR
- First Thunk Complete

//https://github.com/coryhouse/pluralsight-redux-starter## Intro

- Create Manage Course page
- Create reusable form inputs
- Popilat form via
    - mapStateToProps
    - componentWillReceiveProps

## Create Manage Course Page

- create ManageCoursePage.js 
- we create a new page, we need to update routing to support it
- route we set and id 
    - assume the second segment of the url contains the id
    ```js
            <Route path="course/:id" component={ManageCoursePage} />
    ```
    - in each case, we will map to the ManageCoursePage component
```js
import React,{PropTypes} from 'react';
import{connect} from 'react-redux';
import{bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';


class ManageCoursePage extends React.Component{
    constructor(props,context){
        super(props, context);
    }

    render(){
        return (
            <div></div>
        );
    }
}

ManageCoursePage.propTypes ={
    //myProp: Proptypes.string.isRequired
};

function mapStateToProps(state, ownProps){
    return{
        state: state
    };
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(courseActions,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursePage);
```

## Create Manage Course Form

- destruct all the prorps here in the function
- CourseForm.propTypes should have the same number of desturctured props
 
```js
import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

// destruct all the prorps here in the function
const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
    return (
        <form>
            <h1>Manage Course</h1>
            <TextInput
                name="title"
                label="Title"
                value={course.title}
                onChange={onChange}
                error={errors.title}/>

            <SelectInput 
                name="authorId"
                label="Author"
                value={course.authorId}
                defaultOption="Select Author"
                options={allAuthors}
                onChange={onChange}
                error={errors.authorId}/>

            <TextInput
                name="category"
                label="Category"
                value={course.category}
                onChange={onChange}
                error={errors.category} />
            

            <TextInput
                name="length"
                label="Length"
                value={course.length}
                onChange={onChange}
                error={errors.length} />
            
            <input 
                type="submit"
                disable={loading}
                value = {loading ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave}/>
        </form>
    );
};

//should have the same number of desturctured props
CourseForm.propTypes = {
    course: React.PropTypes.object,
    allAuthors: React.PropTypes.array,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default CourseForm;

```

## Crerate Form Input Components
- to see this step by step see the flux curse

- TextInput
    ```js
    import React, {PropTypes} from 'react';

    const TextInput = ({name,label,onChange,placeholder,value,error}) => {
        let wrapperClass = 'form-group';
        if (error && error.length > 0){
            wrapperClass += " " + 'has-error';
        }
        return (
            <div className={wrapperClass}>
                <label htmlFor={name}>{label}</label>
                <div className="field">
                    <input
                        type="text"
                        name={name}
                        className="form-control"
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}/>
                    {error && <div className="alert alert-danger">{error}</div>}
                </div>
            </div>
        );
    };

    TextInput.propTypes = {
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
        value: PropTypes.string,
        error: PropTypes.string
    };

    export default TextInput;
    ```
- SelectInput
    ```js
    import React, {PropTypes} from 'react';

    const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
        return (
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <div className="field">
                    <select 
                        name={name}
                        value={value}
                        onChange={onChange}
                        className="form-control">
                        <option value="">{defaultOption}</option>
                        {options.map((option) => {
                            return <option key={option.value} value={option.value}> {option.text}</option>;
                        })}
                    </select>
                    {error && <div className="alert alert-danger">{error}</div>}
                </div>
            </div>
        );
    };

    SelectInput.propTypes = {
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        defaultOption: PropTypes.string,
        value: PropTypes.string,
        error: PropTypes.string,
        options: PropTypes.arrayOf(PropTypes.object)
    };

    export default SelectInput;

    ```

## Use Manage Course Form

- can only have one top-level element in my JSX so we nee to define a wrapper div right here
    ```js
    render(){
        return (
            <div>
                <h1>Manage Course</h1>
                <CourseForm course={this.state.course}/>
            </div>
        );
    }
    ```
- update mapStateToProps to pass an empty course
    ```js
    function mapStateToProps(state, ownProps){
        //course core structure
        let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
        return{
            course: course
        };
    }
    ```
- we need pass down mutable state to our form, set local state to our component in the contructor
    ```js
    <CourseForm 
        allAuthors={[]}
        course={this.state.course}
        errors={this.state.errors}
    />
    ```

## Create Author Actions

```js
import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';

export function loadAuthorsSuccess(authors){
    return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors(){
    return dispatch => {
        return AuthorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    };
}
```

## Create Author Reducer

```js
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) {
    switch (action.type) {
        case types.LOAD_AUTHORS_SUCCESS:
            return action.authors;

        default:
            return state;
    }
}
```

- we are hard coding an array so we should centralize our initial state
    - some people create in the reducer folders
    - some people create on a constant folders 
    - we centralize our declarations about what is in state

    ```js
    //initialState.js
    export default {
        authors: [],
        courses: []
    }
    ```

    ```js
    //implement
    //authorReducer.js
    import initialState from './initialState';
    export default function authorReducer(state = initialState.authors, action) {

    ```
    - the reason to do this is when you create more and more reducer, it becomes tricky to hold eactly what's n the store in your head 
    - its helpful to create a separeate piece of initial state that shows somebody this is what our store looks like
    - all these reducers are dealing with a slice of this store 
    - remeber to add any reducer you create to your root reducer 
    ```js
    // root reducer
    import {combineReducers} from 'redux';
    import courses from './courseReducer';
    import authors from './authorReducer';

    const rootReducer = combineReducers({
        courses,
        authors
    }); 

    export default rootReducer;
    ```
    - linked in the index.js of the app
    ```js
    import {loadAuthors} from './actions/authorActions';
    store.dispatch(loadAuthors());
    ```

## Map Author Data for Dropdown

1. Expose author as props in our component by adding it to our mapStateToProps fuctions
    - we cant simply pass the lis of authors as is
    - the shape of data that is in our store isnt a good fit fr placing in the drop-down
    - we need to translate the data comming from the api to something useful for the dropdow
    - the place to do such transformation is the mapStateToProps function
    ```js
    function mapStateToProps(state, ownProps){
        //course core structure
        let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

        const authorsFormattedForDropdown = state.authors.map(author => {
            return {
                value: author.id,
                text: author.firstName + ' ' + author.lastName
            };
        });

        return{
            course: course,
            authors: authorsFormattedForDropdown
        };
    }
    ```
2. Add it to .propTypes
    ```js
    ManageCoursePage.propTypes ={
        course: PropTypes.object.isRequired,
        authors: PropTypes.array.isRequired
    };
    ```

3. Now we can use it in the `<CourseForm allAuthors={[]}>`
    ```js
    class ManageCoursePage extends React.Component{
        constructor(props,context){
            super(props, context);
            
            this.state ={
                course: Object.assign({}, props.course),
                errors: {}
            };

        }

        render(){
            return (
                    <CourseForm 
                    allAuthors={this.props.authors}
                    course={this.state.course}
                    errors={this.state.errors}
                    />
            );
        }
    }   
    ```

## Create Form Change Handler

1. Create the `updateCourseState` in `class ManageCoursePage extends React.Component{}`
```js
updateCourseState(event){
    const field = event.target.name;
    let course = Object.assign({}, this.state.course);
    course[field] = event.target.value;
    return this.setState({course: course});
}
```

2. Set it in the constructor 
    ```js
    this.updateCourseState = this.updateCourseState.bind(this);
    ```

3. Set it on the render CourseForm
    ```js
    <CourseForm 
        allAuthors={this.props.authors}
        onChange={this.updateCourseState}
        course={this.state.course}
        errors={this.state.errors}
    />
    ```

## Create Save Course Thunk

1. Create the action in courseActions.js
    ```js
    export function saveCourse(course){
        return function (dispatch, getState) {
            return courseApi.saveCourse(course).then(savedCourse => {
                course.id ? dispatch(updateCourseSuccess(savedCourse)) :
                    dispatch(createCourseSuccess(saveCourse));
            }).catch(error => {
            throw(error); 
            });
        };
    }
    ```
    - `getState` this is useful for cases where you are wanting to access the Redux store and get particular pieces of state out of it right here without having to pass it in as a parameter `useful in larger applications`

2. create `createCourseSuccess` and `updateCourseSuccess` 
    ```js
    export function createCourseSuccess(course) {
        return {type: types.CREATE_COURSE_SUCCESS, course}
    }

    export function updateCourseSuccess(course) {
        return {type: types.UPDATE_COURSE_SUCCESS, course}
    }
    ```

3. create the actionTypes
    ```js
    //actionTypes.js
    export const CREATE_COURSE_SUCCESS = 'CREATE_COURSE_SUCCESS';
    export const UPDATE_COURSE_SUCCESS = 'UPDATE_COURSE_SUCCESS'; 
    ```

## Handle Creates and Updates in Reducer

1. Check create course in `courseReducer.js`
    - dont do state.push remember state is immutable
    ```js
    case types.CREATE_COURSE:
            return [...state,
                Object.assign({}, action.course)
            ];
    ```
2. Create update course
    - since the state is immutable, we cant simply change the appropiate index in the array
    - we need to use the filter function (ES6) to get the list of all the courses except for the course thats being updated
    - `...` the spread operator in the front thats what create a brand new array out of the filtered results that are returned form filter
    ```js
    case types.UPDATE_COURSE_SUCCESS:
        return [
            ...state.filter(course => course.id !== action.course.id),
            Object.assign({},action.course)
        ];
    ``` 

## Dispatch Create and Update

1. Create the `saveCourse` function in `class ManageCoursePage extends React.Component{}`
    ```js
    saveCourse(event){
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
    }
    ```

2. Create the corresponding bind in the `constructor`
    ```js
    this.saveCourse = this.saveCourse.bind(this);
    ```

3. Pass it in the CourseForm
    ```js
    <CourseForm 
        allAuthors={this.props.authors}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        course={this.state.course}
        errors={this.state.errors}
    />
    ```

4. Add the actions to the propTypes validation
    ```js
    ManageCoursePage.propTypes ={
        course: PropTypes.object.isRequired,
        authors: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired
    };
    ```

5. Go to CoursesPage.js and add the input button to add course
    ```js
    return (
        <div>
            <h1>Courses</h1>
            <input type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage}/>
            <CourseList courses={courses} />
        </div>
    );
    ```

6. Create the `redirectToAddCoursePage` function
    ```js
    redirectToAddCoursePage(){
        browserHistory.push('/course');
    }
    ```

7. bind the `redirectToAddCoursePage` in the constructor
    ```js
    constructor(props, context) {
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }
    ```

## Redirect via React Router Context Redirect

1. We declare the contexTypes that we'd like to import on our component
    - since contextTypes is a static property, it has to be done after the class definition
    ```js
    ManageCoursePage.propTypes{};

    ManageCoursePage.contextTypes ={
        router: PropTypes.object
    };
    ```
    - declare `router: PropTypes.object` as optional to avoid a linitng warning when testing this component
    - context is a global variables that library authors use but we as library consumers should avoid to use 

2. We add it after we save the course in the `saveCourse` function
    ```js
    saveCourse(event){
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
        this.context.router.push('/courses');
    }
    ```

## Populate Form via mapStateToProps

1. we need to see the url to know if there any id 
    - easy to do with ownProps
    - we can access some routing-related props populated by React Router based on the route defined for this component
    - read the course id in the `mapStateToProps`
    ```js
    const courseId = ownProps.params.id; //from the path   `/course/:id`

    ```
2. we create a if statement to validate if there is a courseId
    ```js
    if (courseId){
        course = getCourseById(state.courses, courseId);
    }
    ```

3. and we create the function `getCourseById`
    ```js
    function getCourseById(courses, id){
        const course = courses.filter(course => course.id == id);
        if (course.length) return course[0]; // since filter return an array we have to get the first element
        return null;
    }

    ```

4. we have a problem when we reload the page it does not have courses load yet so we add
    
    ```js
    if (courseId && state.courses.length > 0){
        course = getCourseById(state.courses, courseId);
    }
    ```

    - `&& state.courses.length > 0` to wait to the ajax to receive some courses and do not thorw an error
    - this problem resolve with lifecicle methods that is called `componentWillReceiveProps`

## Update State via componentWillReceiveProps   

1. add `componentWillReceiveProps` after the constructor
    - called anytime props have changed
    - as well as anytime that React thinks that props might have changed
    - thats why the validation
    ```js
    componentWillReceiveProps(nextProps) {
        if(this.props.course.id != nextProps.course.id) {
            // Necessary to populate form when existing course is loaded directly.
            this.setState({course: Object.assign({}, nextProps.course)});
        }
    }
    ```
    - `this.props.course.id != nextProps.course.id` if it hasn't changed, then dont run this part of the function
    - `this.setState({course: Object.assign({}, nextProps.course)})` this cant run all the time or it will end up overriding our state
    - we only want to update our props when we have ended up requesting a new course


## Summary

- Create Manage Course page
- Created reusable Bootstrap form input
- Populated form via
    - mapStateToProps
    - componentWillReceiveProps## Intro

- The Issues
    - No initial loading indicator
    - No feedback upon clicking save
    - API fails silently
- Track and display async call status
    - like AJAX calls to the server
- Error handling
    - elegantly adress errors that may occur when making API calls in our thunks

## Create Preloader Component

1. we will create a component of moving dots
    - common create file `LoadingDots.js`
    ```js
    import React,{PropTypes} from 'react';

    class LoadingDots extends React.Component{
        constructor(props,context){
            super(props, context);
            this.state = {frame: 1};
        }

        componentDidMount(){
            this.interval = setInterval(()=>{
                this.setState({
                    frame: this.state.frame + 1
            });
            },this.props.interval);
        }

        componentWillUnmount(){
            clearInterval(this.interval);
        }

        render(){
            let dots = this.state.frame % (this.props.dots + 1);
            let text = '';
            while (dots > 0){
                text += '.';
                dots--;
            }
            return <span {...this.props}>{text}&nbsp;</span>;
        }
    }

    LoadingDots.defaultProps ={
        interval: 300,
        dots : 3
    };

    LoadingDots.propTypes ={
        interval: PropTypes.number,
        dots: PropTypes.number
    };



    export default (LoadingDots);
    ```

2. import it to the header.js
    ```js
    import LoadingDots from './LoadingDots';
    const Header = () => {
        return (
            <nav>   
                <IndexLink to="/" activeClassName="active">Home</IndexLink>
                {" | "} 
                <Link to="/courses" activeClassName="active">Courses</Link>
                {" | "} 
                <Link to="/about" activeClassName="active">About</Link>
                <LoadingDots interval={100} dots={20}/>
            </nav>
        );
    };
    ```

## Create Ajax Status Actions

1. Create `ajaxStatusActions.js`
    ```js
    import * as types from './actionTypes';

    export function beginAjaxCall() {
        return {type: types.BEGIN_AJAX_CALL};
    }
    ```

2. Create the const in `actionTypes.js`
    ```js
    export const BEGIN_AJAX_CALL = 'BEGIN_AJAX_CALL'; 
    ```

3. Update our initial state of the application to track the number of ajax calls in progress 
    ```js
    export default {
        authors: [],
        courses: [],
        ajaxCallsInProgress: 0
    };
    ```

##  Create Ajax Status Reducer

1. Create ajax reducer
    ```js
    import * as types from '../actions/actionTypes';
    import initialState from './initialState';

    function actionTypesEndsInSuccess(type) {
        return type.substring(type.length - 8) == '_SUCCESS';
    }

    export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action){
        if(action.type == types.BEGIN_AJAX_CALL){
            return state + 1;
        } else if (actionTypesEndsInSuccess(action.type)){
            return state -1;
        }

        return state;
    }
    ```

2. Add it to the root reducer

    ```js
    // root reducer
    import {combineReducers} from 'redux';
    import courses from './courseReducer';
    import authors from './authorReducer';
    import ajaxCallsInProgress from './ajaxStatusReducer';

    const rootReducer = combineReducers({
        courses,
        authors,
        ajaxCallsInProgress
    }); 

    ```

## Call Begin Ajax in Thunks

1. import it and add it to the funcitons in the nameActions.js
    ```js
    import {beginAjaxCall} from './ajaxStatusActions';
    ```

2. add it to the functions as a dispatch
    ```js
    export function loadCourses(){
        return function (dispatch) {
            dispatch(beginAjaxCall());
        ...}}
    export function saveCourse(course) {
        return function (dispatch, getState) {
            dispatch(beginAjaxCall());
        ...}}
    ```
    - this could be done by adding it to the Thunk Api code but this is helpfull in the way that if yo wish no to show in some places it can be done like `optimistic delete`

## Hide Preloader Based on Status

1. Change our top level component to a connect component `app.js`
    ```js
    import React, {PropTypes} from 'react';
    import Header from './common/Header';
    import {connect} from 'react-redux';

    class App extends React.Component {
        render() {
            return (
                <div className="container-fluid">
                    <Header 
                        loading={this.props.loading}
                    />                
                    {this.props.children}
                </div>
            );
        }
    }

    App.propTypes = {
        children: PropTypes.object.isRequired
    };

    function mapStateToProps(state, ownProps){
        return {
            loading: state.ajaxCallsInProgress > 0
        };
    }

    export default connect(mapStateToProps)(App);
    ```

2. Change on the header.js 
    ```js
    import React, {PropTypes} from 'react';
    import {Link, IndexLink } from 'react-router';
    import LoadingDots from './LoadingDots';

    const Header = ({loading}) => {
        return (
            <nav>   
                <IndexLink to="/" activeClassName="active">Home</IndexLink>
                {" | "} 
                <Link to="/courses" activeClassName="active">Courses</Link>
                {" | "} 
                <Link to="/about" activeClassName="active">About</Link>
                {loading && <LoadingDots interval={100} dots={20}/>}
            </nav>
        );
    };

    Header.propTypes = {
        loading: PropTypes.bool.isRequired
    };

    export default Header;


    ```

    - ` {loading && <LoadingDots interval={100} dots={20}/>}` leans on the short-circuiting nature of the logical operator AND. the right side will only evaluate if this left-hand side is true

## Use Promises to Wait for Thunks

- When we save the course it redirect directly to solve this we can use a promise to redirect after it save

1. create the promise
    ```js 
    saveCourse(event){
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course)
            .then(() => this.redirect());
    }
    ```
    
2. create the function
    ```js 
    redirect(){
        this.context.router.push('/courses');
    }
    ```

## Create Form Submission Loading Indicator

- when to use local state?
    - is usaeful because this is fleeting data that the rest of the app will not care about 

1. Set a saving in the state
    ```js
    this.state ={
            course: Object.assign({}, props.course),
            errors: {},
            saving: false
        };

    ```

2. add it `saveCourse` after the `event.preventDefault()` 
    ```js
    saveCourse(event){
        event.preventDefault();
        this.setState({saving: true});
        this.props.actions.saveCourse(this.state.course)
            .then(() => this.redirect());
    }
    ```   

3. add it before the redirect in the `redirect()` function
    ```js
    redirect(){
        this.setState({saving: false});
        this.context.router.push('/courses');
    }
    ```

4. we pass it to our course form to have the info available
    ```js
    <CourseForm 
        allAuthors={this.props.authors}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        course={this.state.course}
        errors={this.state.errors}
        saving={this.state.saving}
    />
    ```
5. we see it in the CourseForm

    ```js
    <input 
        type="submit"
        disabled={saving}
        value = {saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    ```

## Display save notification

- Using toastr
1. we need to import toastr minified css in our application entry point `index.js`
2. `import '../node_module/toastr/build/toastr.min.css'`
3. we in import it in our ManageCoursePage.js `import toastr from 'toastr'`
4. we add it in the redirect
    ```js
    redirect(){
        this.setState({saving: false});
        toastr.success('Course saved');
        this.context.router.push('/courses');
    }
    ```

## Error Handling

- two ways of handling the errors
    - we could dispatch a saveCourse error action right here and pass it the error message that we've received from our API  call
    - we can handle the rejected promise at the call site, which in this case is the ManageCoursePage [we'll use this]

1. add a catch to save course 
    ```js
    saveCourse(event){
        event.preventDefault();
        this.setState({saving: true});
        this.props.actions.saveCourse(this.state.course)
        .then(() => this.redirect())
        .catch(error => {
            toastr.error(error);
            this.setState({saving: false});
            });
        }
    ```

2. to cancel the ajax loading
    1. go to action types create the const
        - `export const AJAX_CALL_ERROR = 'AJAX_CALL_ERROR'; `

    2. add the ajaxStatusAction
        ```js
        export function ajaxCallError() {
            return {type: types.AJAX_CALL_ERROR};
        }
        ```
    3. put it to use in the ajaxStatusReducer  
        ```js
        export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action){
            if(action.type == types.BEGIN_AJAX_CALL){
                return state + 1;
            } else if (action.type == types.AJAX_CALL_ERROR ||
                actionTypesEndsInSuccess(action.type)){
                return state -1;
            }

            return state;
        }
        ```
    4. dispatch it in out `courseAction.js`
        ```js
        import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

        export function saveCourse(course) {
        return function (dispatch, getState) {
            dispatch(beginAjaxCall());
            return courseApi.saveCourse(course).then(savedCourse => {
                course.id ? dispatch(updateCourseSuccess(savedCourse)):
                dispatch(createCourseSuccess(savedCourse));
            }).catch(error => {
                dispatch(ajaxCallError(error));
                throw(error); 
            });
        };
        }
        ```

## Summary

- Displaying and tracking async status
- Handling errors
## Intro

- Testing Technologies
    - Testing frameworks
    - Assetion libraries
    - Helper libraries

- We'll test
    - React presentation components (react test util and enzyme)

## Testing Frameworks

- Mocha
    - highly configurable and has a large ecosystem of support
    - Mocha need an assetion libraries
        - Chai (uses chain base api)
        - expect (npm) 
        -   |Chai|Expect|
            |--|--|
            |to.equal|toBe|
            |to.deep.equal|toEqual|
            |to.exist|toExist|
            |to.not.exist|toNotExist|
            |to.be.above|ToBeGreaterThan|
            |No spy|Spy buitl in|
- Jasmine 
- Jest
- tape
    - simplest library of the bunch
- AVA
    - use babel

|Mocha|AVA|
|--|--|
|Serial|Concurrent|
|No assertions built in|Assertions built in|
|Use globals|No globals|
|No built-in ES6 support|Built-in ES6 support|
|Runs all test on save|Runs only impacted tests|
|Long stack trace upon error|Short specific error with marker|
|Proven, mature, with huge ecosystem|new|

## Helper Libraries

- Should we use a helper library?
- Which one?
    - React Test Utils
    - Enzyme

### React Test Utils

- React testing library
- Built by Facebook
- Verbose API

#### Two Rendering Options
|shallowRedner|renderIntoDocument|
|--|--|
|let us render just the component that we are testing withou rendein any of his children|when you need click and changes event|
|constrain yourself to testing a component as a unit|can use JSDOM| 
|ensure that your test arent indirectly asserting on behavior of child components||
|Render single component|Render component and children| 
|No DOM required|DOM Required| 
|Fast and Simple |Supports simulating interactions| 

#### DOM Interactions

- findRederedDOMComponentWithTag
    - useful for finding specific DOM elements by tag

- scryRenderedDomComponentsWithTag
    - funs components by tag name
 
- Simulate
    - once you have reference to a specific element, yu can simulate intreactions on the element using the Simulate funcion
    - Clicks
    - Keypresses
    - Etc.

### Enzyme 

- [Github](https://github.com/airbnb/enzyme)

#### Ensyme is an Abstraction
- Behind the scenes
    - React Test Utils
    - JSDOM (In-memory DOM)
    - Cheerio (Fast jQuery style selectors)

- Put this tree tools working together
- We dont have to open our browser, our test just run in memory via Node.

### Comparasion

||REact Test Utils|JSDOM|Cheerio|Enzyme|
|--|--|--|--|--|
|Run test in|Node|Node|Node|Node|
|Dependencies|None|None|None|JSDOM,Cheerios,React Test Utils|
|Selectors|Wordy|DOM|JQuery|Terse|
|Interactions|Yes|Yes|No|Yes|
|Ease|Clunky|Okay|Easy|Easy|
|Speed|Varies|Okay|Fast|Varies|

## Where to Test

- Browser 
    - Karma (popular test runner for running tests in a real deal browser)
- Headless Browser
    - Phantom JS
- In-memory DOM
    - JSDOM simulates an actual browser by creating a DOM in memory that we can interact with
    - fast
    - quick to set up 
    - allows us to just run our test via Node

### Naming Test Files
- fileName.spec.js
- fileName.test.js

### Where Do Test Fules Belong?

- Mocha default: /test
- We'll place test alongside the file under test. Why?
    - Easy import. Always ./filenameUnderTests
    - Clear visibility
    - Convenient to open
    - Move files and testo together

### Our Plan

- **What**: React components and Redux
- **How**: Mocha with Expect
- **Where**: In-memory DOM via JSDOM
- **Helper**: Enzyme

## Testing React with React Test Utils

### Testng Presentation Components

 - Enzyme labels render into document as mount, but in the background calls react test utils

### Rendering Options
|Shallow Render|Render into Document|
|--|--|
|Fast|Slower|
|Test in isolation|Test set of components|
|No refs or interactions yet|Test refs and interactions|
|Recommended for the future||

### Test Component with Shallow Rendering
- First with React test Utils
- Later wuth Enzyme

> change mocha from progress to spec at the start of our test to see better the this, progress is more silently

#### Making the test

1. we create a file in the folder course to test course form `CourseForm.test.js`

2. we import what we need 
    ```js
    import expect from 'expect';
    import React from 'react';
    import TestUtils from 'react-addons-test-utils';
    import CourseForm from './CourseForm';
    ```

3. add the describe block
    - use in mocha to gropu and label our test, so tou can nest multiple tests inside

    ```js
    describe('CourseForm via React Test Utils',() => {

    });
    ```

    - can use an arrow function or a anonymous function

4. helpful to create a setup function that will return us the output of rendering the component under test

    ```js
    function setup() {
    //declare our props outside the render to see them better
    let props = {
        course: {}, saving:false, errors:{},
        onSave: () => {},
        onChange:() => {}
    };

    let renderer = TestUtils.createRenderer();
    renderer.render(<CourseForm {...props}/>);
    //to return the output of the render
    let output = renderer.getRenderOutput();

    // return an object with the props that we passed
    // the output 
    // and the renderer in case we need it
    return {
        props,
        output,
        renderer
    };
    }
    ```

5. Create the test

    ```js
    describe('CourseForm via React Test Utils',() => {
        //it functios wich allows me to specify what im trying to test
        it('renders form and h1', () => {
            const { output } = setup();
            // see if the top level tag is form
            expect(output.type).toBe('form');
            let [ h1 ] = output.props.children;
            expect(h1.type).toBe('h1');
        });

        it('Save button is labeled "Save" when not saving', () => {
            const {output} = setup(false);
            const submitButton = output.props.children[5];
            //value of the submit button 
            expect(submitButton.props.value).toBe('Save');
        });

        it('Save button is labeled "Saving..." when saving', () => {
            const {output} = setup(true);
            const submitButton = output.props.children[5];
            //value of the submit button 
            expect(submitButton.props.value).toBe('Saving...');
        });
    });
    ```


## Test React with Enzyme

1. import the necessary things
    ```js
    import expect from 'expect';
    import React from 'react';
    import {mount, shallow} from 'enzyme';
    import TestUtils from 'react-addons-test-utils';
    import CourseForm from './CourseForm';
    ```
    
    - `import TestUtils from 'react-addons-test-utils'` Test utils is used by enzyme but not necessary need to be explicitly imported


2. create the setup function
    ```js
    function setup(saving) {
        const props = {
            course: {}, saving: saving, errors: {},
            onSave: () => {},
            onChange: () => {}
        };

        return shallow(<CourseForm {...props} />);
    }
    ```

3. create the test
    ```js
    describe('CourseForm via Enzyme',() => {
        it('renders form and h1', ()=> {
            const wrapper = setup(false);
            //expect to find just on form
            expect(wrapper.find('form').length).toBe(1);
            expect(wrapper.find('h1').text()).toEqual('Manage Course');
        });

        it('Save button is labeled "Save" when not saving', () => {
            const wrapper = setup(false);
            expect(wrapper.find('input').props().value).toBe('Save');
        });

        it('Save button is labeled "Saving..." when saving', () => {
            const wrapper = setup(true);
            expect(wrapper.find('input').props().value).toBe('Saving...');
        });
    });
    ```

4. the complete test file `CourseForm.Enzyme.test.js
    - test:watch dont see new files

    ```js
    import expect from 'expect';
    import React from 'react';
    import {mount, shallow} from 'enzyme';
    // Test utils is used by enzyme but not necessary explicitly imported
    import TestUtils from 'react-addons-test-utils';
    import CourseForm from './CourseForm';

    function setup(saving) {
        const props = {
            course: {}, saving: saving, errors: {},
            onSave: () => {},
            onChange: () => {}
        };

        return shallow(<CourseForm {...props} />);
    }

    describe('CourseForm via Enzyme',() => {
        it('renders form and h1', ()=> {
            const wrapper = setup(false);
            //expect to find just on form
            expect(wrapper.find('form').length).toBe(1);
            expect(wrapper.find('h1').text()).toEqual('Manage Course');
        });

        it('Save button is labeled "Save" when not saving', () => {
            const wrapper = setup(false);
            expect(wrapper.find('input').props().value).toBe('Save');
        });

        it('Save button is labeled "Saving..." when saving', () => {
            const wrapper = setup(true);
            expect(wrapper.find('input').props().value).toBe('Saving...');
        });
    });
    ```


## Summary

### **Testing Approach**
    - Mocha, Expect, React Test Utils, and Enzyme
    - In-memory DOM via Node

### **Tested**
    - React presentation components## Intro

### We'll Test
- Connected components
- Redux
    - Action creatir
    - Thunks
    - Reducers
    - Store

## Testing Connected React Components

### Two goals
1. Test markup 
    - given a certain set of props, do we get the expected output? (presentational component)
2. Test behavior
    - given a click, scroll, drag, change, what happens? do we get the expected behavior 

### Testing Container Components

- Trick
    - they are all wrappend in a call to connect
    - connect function assumes that our app is ultimately wrapped in a Provider component
    - so our container components don't export the component we wrote
    - instead, they export the component wrapped in a call to connect

- They're wrappend in a call to connect! What do i do?
1. Wrap with <Provider>
    - U reference the store, ppas it to the Provider and compose your component under test inside
    - `<Provider store={store}>MyComponent</Provider>`
    - can create a custom store for the test
    - this approach is useful if you want to test the Redux-related portions of your component.
2. Add named export for unconnected component
    - insteareste in testing the component's rendering and local state-related behaviors 

### Testing Connected Components

1. Add the neccesary imports
    ```js
    import React from 'react';
    import expect from 'expect';
    import { mount, shallow } from 'enzyme';
    import ManageCoursePage from './ManageCoursePage';
    ````

2. create the test 
    ```js
    describe('Manage Course Page', () => {
        it('sets error message when trying to save empty title', () => {
            const wrapper = mount(<ManageCoursePage/>);
        });
    });
    ```
    - `const wrapper = mount(<ManageCoursePage/>);`
    - here we need to test this components interactions 
    - with its child components
    - thats why we use mount 
    - we need to use mount so our full DOM is created in memory 
    
    ### we get an error, solution are:

    #### wrap the root component in a `<Provider>`
    
    - `const wrapper = mount(<Provider store={store}><ManageCoursePage/></Provider>);`
           
    - useful to test redux connect-related code like mapStateToProps
        
    #### Update our component to export the raw unconneted version
    - allows to test it directly without the complexity of setting up Redux's provider and store
    - does not brake any existing import statements

3. change in the `ManageCoursePage.js` to export the class 
    ```js
    export class ManageCoursePage extends React.Component{
    ```
    - so you can export it

4. export it with curly braces
    ```js
    import {ManageCoursePage} from './ManageCoursePage';
    ```

5. pass `authors={[]}` becouse of the error handle by the mapStateToProps
    - `TypeError: Cannot read property 'map' of undefined`

6. add test of the button
    ```js
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    ```

7. we simulate the saveButton click but we have this error 
    - `TypeError: Cannot read property 'saveCourse' of undefined`
    - we can add an empty course the on from `mapStateToProps`
    - and use the spread operator on props new defined  object
    ```js
    const props = {
        authors: [],
        course: { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' }
    };
    const wrapper = mount(<ManageCoursePage {...props}/>);
    ```

8. we have a problem with the saveCourse action so we add in the props as a empty function that just resolve the promise
    ```js
    const props = {
        authors: [],
        actions: { saveCourse: () => {return Promise.resolve();}},
        course: { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' }
    };
    ```
9. set the expect to the errors title
    - `expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');`
    - we have an error so we must define the validation in the saveCourse

10. define validation in the saveCourse and define the function
    ```js
    courseFormValid() {
        let formIsValid = true;
        let errors = {};

        if (this.state.course.title.length < 5){
            errors.title = 'Title must be at least 5 characters.';
            formIsValid = false;
        }

        this.setState({errors:errors});
        return formIsValid;
    }

    saveCourse(event){
        event.preventDefault();
        if (!this.courseFormValid()){
            return;
        }
        this.setState({saving: true});
        this.props.actions.saveCourse(this.state.course)
        .then(() => this.redirect())
        .catch(error => {
            toastr.error(error);
            this.setState({saving: false});
            });
        }
    ```

11. test complete code
    ```js
    import React from 'react';
    import expect from 'expect';
    import { mount, shallow } from 'enzyme';
    import {ManageCoursePage} from './ManageCoursePage';


    describe('Manage Course Page', () => {
        it('sets error message when trying to save empty title', () => {
            const props = {
                authors: [],
                actions: { saveCourse: () => {return Promise.resolve();}},
                course: { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' }
            };
            const wrapper = mount(<ManageCoursePage {...props}/>);
            // the save button is the last input
            // we could grab it by class or id as well if it have any
            const saveButton = wrapper.find('input').last();
            //confirmar que es el button
            expect(saveButton.prop('type')).toBe('submit');
            saveButton.simulate('click');
            expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
        });

        
    });
    ```

## Testing mapStateToProps

- Testing mapStateToProps via extraction

1. take out the `authorsFormattedForDropdown` function form the ManageCoursePage.js mapStateToProps

2. create a folder calle `selectors`
    - good for complicate data manipulation 
    - good for manipulating code 

3. create a file called `selectors.js` 
    - we can create authorsSelectors and courseSelectors files if the one file gets to big
4. paste the function as it can be exported
    ```js
    export function authorsFormattedForDropdown(authors){
        return authors.map(author => {
            return {
                value: author.id,
                text: author.firstName + ' ' + author.lastName
            };
        });
    }
    ```

> Reselect to mimalize functions recommends placing your selectors in a folder caller selectors as well, if we use relect this functions only will rerun when it gets new parameters 

5. import it in the `ManageCoursePage.js` and use it pass the parameters
    ```js
    import {authorsFormattedForDropdown} from '../../selectors/selectors';

    return{
        course: course,
        authors: authorsFormattedForDropdown(state.authors)
    };
    ```


- consider just extract the complicated pieces into separate selectors
- which is really just a name for plain pure functions that are easy to test.
- consider use reselect if the functios is expensive to run

## Testing Action Creators

- pretty straigth forward
- create the test file `courseAction.test.js`
```js
import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

// Test a sync action
describe('Course Actions', () => {
    describe('createCourseSuccess', () => {
        it('should create a CREATE_CORUSE_SUCCESS action', () =>{
            //arrange
            const course = {id:'clean-code', title:'Clean Code'};
            const expectedAction = {
                type: types.CREATE_COURSE_SUCCESS,
                course: course
            };

            //act
            const action = courseActions.createCourseSuccess(course);
            
            //assert
            expect(action).toEqual(expectedAction);
        });
    });
});
```

## Testing Reducers

> people who neves wrote unit tests for front-end apps started writting them becauseit is just so easy to test reducers

- dont need to mock any dependencies or simulate ajax
- you can just call the reducer with a state and an action and assert that irs output matches exactly what you expect
- esay as given this input, assert this output
- reducer have no side effect (easy to understand and test)
- so simple that you can even automate the creation of reducer tests using a library called `redux test recorder`

```js
//courseReducer.test.js
import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course Reducer', () => {
    it('should add course when passed CREATE_COURSE_SUCCESS', () => {
        //arrange
        const initialState = [
            {title: 'A'},
            {title: 'B'}
        ]; 
        
        const newCourse = {title: 'C'};
        
        const action = actions.createCourseSuccess(newCourse);
        
        //act 
        const newState = courseReducer(initialState, action);
        
        // assert
        expect(newState.length).toEqual(3);
        expect(newState[0].title).toEqual('A');
        expect(newState[1].title).toEqual('B');
        expect(newState[2].title).toEqual('C');
    });

    it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
        
        //arrange
        const initialState = [
            {id: 'A', title: 'A'},
            {id: 'B', title: 'B'},
            {id: 'C', title: 'C'}
        ]; 
        
        const course = { id: 'B', title: 'New Title' };
        const action = actions.updateCourseSuccess(course);
        
        //act 
        const newState = courseReducer(initialState, action);
        //find the object with id.B
        const updatedCourse = newState.find(a => a.id == course.id);
        //find the object with id.A to check later its title didnt change
        const untouchedCourse = newState.find(a => a.id == 'A');

        // assert
        expect(updatedCourse.title).toEqual('New Title');
        expect(untouchedCourse.title).toEqual('A');
        expect(newState.length).toEqual(3);
    });
});
```

## Testing Thunks

- handle asynchrony
- often dispatch multiple actions
- often interact with web API 

- Need to Mock two things:  
    - Store: with `redux-mock-store`
    - HTTP calls with `nock` which stands for Node mock.


1. import the necessaries things
    ```js
    import thunk from 'redux-thunk';
    import nock from 'nock';
    //let us configure a muck store
    import configureMockStore from 'redux-mock-store';
    ```

2. configure middleware
    ```js
    //only middleware we need is thunk
    const middleware = [thunk]; 
    // configureMockStore takes and array of middleware
    const mockStore = configureMockStore(middleware);
    ```
3. set the async
    -important with nock that after each call, we call cleanAll(), performs a clean up after each one of out tests is run 
    ```js    
    describe('Async Actions', () => {
        afterEach(() => {
            nock.cleanAll();
        });
    ```
4. set the it in mocha with the done
    - note we pass a callback function called done to mocha
    - Call this function when async work is complete
    ```js
    it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {...}
    ```

5. using nock to simulete a ajax call
    - here `nock('https://example.com')` we should define the precise url for this test  
        ```js
        nock('https://example.com')
            .get('/courses')
            .reply(200,{body: {course: [{id: 1, firstName: 'Cory', lastName: 'House'}]}});
        ```
        - will return this fake response instead
        - so i can hard-code in the response that i'd like to receive instead of making an actual HTTP call to the address that i specify
        - carefull with the delay when no using nock

6. declare array of actions that we are expecting
    ```js
        const expectedAction = [
            {type: types.BEGIN_AJAX_CALL},
            //expect this payload (body) to be part of load courses success
            {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
        ];
    ```

7. put our mock store to use
    ```js
    const store = mockStore({courses: []}, expectedAction); 
    ```

8. dispatch our store
    ```js 
    store.dispatch(courseActions.loadCourses()).then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
            expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
            //calls back that we define above 
            //that tells mocha async work is complete
            done();
        });
    ```

    - end with `done()` the calls back that we define above that tells mocha async work is complete

9. complete test in `courseAction.test.js` inside `describe('Course Actions', ()`
    ```js
    //test for thunks

    //only middleware we need is thunk
    const middleware = [thunk]; 
    // configureMockStore takes and array of middleware
    const mockStore = configureMockStore(middleware);


    describe('Async Actions', () => {
        afterEach(() => {
            nock.cleanAll();
        });


    it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
        // Here's an example call to nock.
        // nock('https://example.com')
            // .get('/courses')
            // .reply(200,{body: {course: [{id: 1, firstName: 'Cory', lastName: 'House'}]}});
       
        // declare array of actions that we are expecting
        const expectedAction = [
            {type: types.BEGIN_AJAX_CALL},
            {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
        ];

        //put our mock store to use
        const store = mockStore({courses: []}, expectedAction); 

        //dispatch our store
        store.dispatch(courseActions.loadCourses()).then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
            expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
            done();
        });

    });

    ```

- advantage of using mock api: we can run our test tha utilize the mock data, and the willrun extremely fast and reliably becouse the data is static and will be held in memory.

## Testing the Redux Store

### Writing an automated test of the Redux store

- when testing the store we're really writing an integration test rather than a unit test 
- our goal is to assure that our actions, the store, and our reducers are interacting together as expected

### Integration Testing the Store

1. import necessary dependencies
    ```js
    import expect from 'expect';
    import {createStore} from 'redux';
    import rootReducer from '../reducers';
    import initialState from '../reducers/initialState';
    import * as courseActions from '../actions/courseActions';
    ```


2. test that our action creators, our store and our reducers work together as expected to create course

    ```js
     describe('Store', () => {
         it('Should handle creating courses', () => {...}
     }
    ```

3. make the arrange
    ```js
    const store = createStore(rootReducer, initialState);
    const course = {
        title: "Clean Code"
    };
    ```

4. create the action 
    - `const action = courseActions.createCourseSuccess(course);` with this we a referece to the action creator  so we can call our dispatch function in our store and pass it the action that we just set up 
    ```js
    // act
    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action);
    ```
    - here we could dispatch multiple actions and assert on result updateCourseSuccess action and then assert that the store has two courses with the expected value

5. create the assert
    ```js
    // assert
    const actual = store.getState().courses[0];  
    const expected = {
        title: "Clean Code"
    };

    expect(actual).toEqual(expected);
    ```
    - gonna use the getState method so we can write our assertions 
    - we're going to store is the actual result of what is now stored in our store

6. Complete test code
    ```js
    import expect from 'expect';
    import {createStore} from 'redux';
    import rootReducer from '../reducers';
    import initialState from '../reducers/initialState';
    import * as courseActions from '../actions/courseActions';

    describe('Store', () => {
        it('Should handle creating courses', () => {
            // arrange 
            const store = createStore(rootReducer, initialState);
            const course = {
                title: "Clean Code"
            };

            // act
            const action = courseActions.createCourseSuccess(course);
            store.dispatch(action);

            // assert
            const actual = store.getState().courses[0];  
            const expected = {
                title: "Clean Code"
            };

            expect(actual).toEqual(expected);
        });
    });
    ```

## Summary

### Tested
- Connected React components
- Redux
    - Actions creators
    - Thunks
    - Reducers
    - Store (integration test)## Intro

### Setup production build process

- our development process does not generate any actual physical files.
- everything being servd by webpack, just reads the files in the source directory and serves the process

### Convention

- `/src` source code
- `/dist` production build   
    - minified files of
        - index.html (that references both)
        - bundle.js
        - style.css
    - source map file that corresponding to the JS file and the CSS file since we're going to minify both of these

### Production build process
- Lint an runs tests
- Bunlde and minify JS and CSS
- Generate JS and CSS sourcemaps
    - for both so we can debug production issues
- Exclude dev-specific concerns
    - like hot reloading  
- Build React in production mode 
    - so dev-specific features like PropType validation are disabled for optimal performance
- Open prod build in browser 
    - so we can see the result 

## Setup Production Redux Store

- we dont need to use the reduxImmutableStateInvariant usefull in development
    - causes performance problems
1. we create a store for prod and dev
    - `configureStore.dev.js`
    - `configureStore.prod.js`

2. we create `configureStore.js`
    - Dynamic import arent supporte by ES6, so using require instead of import
    ```js
    if (process.env.NODE_ENV === 'production'){
        module.exports = require('./configureStore.prod');
    } else {
        module.export = require('./configureStore.dev');
    }
    ```

    - we're no longer defaulting export from this file
    - our linting rules expect us to export default from each file

3. Disable linting default export in files with `/*eslint-disable import/default */` in the `index.js` file 

## Setup Webpack

1. create the `webpack.config.prod.js` file
2. use the devtool recomended for prod `source-map`
    - little bit slower, but is more thorought, recomended for production
3. `webpack.config.prod.js`
    ```js
    import webpack from 'webpack';
    import path from 'path';
    import ExtractTextPlugin from 'extract-text-webpack-plugin';
    const GLOBALS = {
        // define node env variable that set react for production
        'process.env.NODE_ENV' : JSON.stringify('production')    
    };

    export default {
        debug: true,
        devtool: 'source-map',
        noInfo: false, // in fall wp will display a list o fall the files that it's bundling 
        
        
        // entry points for the aplication 
        entry: path.resolve(__dirname, 'src/index'),



        target: 'web', 

        output: {
            path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
            publicPath: '/',
            filename: 'bundle.js'
        },

        //we tell webpack where our source code is
        devServer: {
            contentBase: path.resolve(__dirname, 'dist')
        },

        plugins: [
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.DefinePlugin(GLOBALS),
            new ExtractTextPlugin('styles.css'),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin()
        ],

        // here we tell webpack the types of files we want to handle
        module: {
            loaders: [
                { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel'] },
                { test: /(\.css)$/, loader: ExtractTextPlugin.extract("css?sourceMap") },
                { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
                { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
                { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
                { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
            ]
        }
    };
    ```
4.  plugins

    - `webpack.optimize.OccurrenceOrderPlugin()`:
        - optimes the order that our files are bundled in for optimal minification
    - `webpack.DefinePlugin(GLOBALS)`:
        - lets us define variables that are then made available to the libraries that Webpack is bundling
        - react, for example, looks at the node enviroment to determine if it should be built in production mode
        - production mode omits development of specific features like PropTypes, which increases React's performance
        - reduces the bundle size
    - `ExtractTextPlugin('styles.css')`
        - let us extract or CSS into a separate file
        - need to reference this separeate file in the production version of our HTML
        - import it with `import ExtractTextPlugin from 'extract-text-webpack-plugin';`
    - `webpack.optimize.DedupePlugin()`
        - help us eliminate duplicated package on our final bundle to hel keep our bundle siie as small as possible
    - `webpack.optimize.UglifyJsPlugin()`   
        - minifies our javascript

5. Update our loader
    - "fileType?sourceMap"
        - `sourceMap`: thi query string parameter tells it to generate a sourceMap as well
        - so we have a corresponding separate physical file that handles our sourceMap
    - loaders is know loader becouse we are defining one
    ```js
    { test: /(\.css)$/, loader: ExtractTextPlugin.extract("css?sourceMap") },
    ```

6. Create file `build.js`

    ```js
    //More info on Webpack's Node API here: https://webpack.github.io/docs/node.js-api.html
    // Allowing console calls below since this is a build file
    /*eslint-disable no-console */
    import webpack from 'webpack';
    import webpackConfig from '../webpack.config.prod';
    import colors from 'colors';

    process.env.NODE_ENV = 'production'; //this assures the Babel dev config (for hot reloading) doesn't apply.

    console.log('Generating minified bundle for production via Webpack. This will take a moment...'.blue);

    webpack(webpackConfig).run((err,stats) => {
        if(err) { // so a fatal error occurred. Stop here.
            console.log(err.bold.red);
            return 1;
        }

        const jsonStats = stats.toJson();

        if(jsonStats.hasErrors){
            return jsonStats.errors.map(error => console.log(error.red));
        }

        if (jsonStats.hasWarnings){
            console.log('Webpack generated the following warnings: '.bold.yellow);        
            jsonStats.warnings.map(warning => console.log(warning.yellow));
        }

        console.log(`Webpack stats: ${stats}`);

        // if we got this far, the build succeeded.
        console.log('Your app has been compiled in production mode and weitten to /dist. it\'s ready to roll!!'.green);
        return 0;
    });

    ```

## Setup HTML Build

- index.html does not reference any ccs file 
- our css is bundled with webpack right into our bundle.js 
- webpack encode our css into the bundle javascript file when we are in development
- we need to modify our index.html file and copy it over to the dist folder as part of our build

1. Create a buildHtml.js 
    - `cheerio`: give us a handy way to interact with an in-memory DOM using jQuery selectors
    - `fs`: node module to work with files in the system

    ```js
    import fs from 'fs';
    import cheerio from 'cheerio';
    import colors from 'colors';

    /*eslint-disable no-console*/

    fs.readFile('src/index.html', 'uft8', (err,markup) => {
        if(err){
            return console.log(err);
        }

        // creates a handy in memory dom that i can query using simple jQuery selectors
        const $ = cheerio.load(markup); 

        //since a separated spreadsheet is only utilized for the production build, need to dynamically
        $('head').prepend('<link rel="stylesheet" href="styles.css">');

        fs.writeFile('dist/index.html', $.html(), 'uft8', function(err){
            if(err){
                return console.log(err);
            }
            console.log('index.html written to /dist'.green);
        });

    });

    // we could reference here a bug tracking feature etc
    // done in react-redux-slingshot
    ```

## Setup dist server

- not necessary but good to see the production build and make sure that everything looks good
- good to debug an issue in the production build    

1. creating the distServer
    - remove the webpack and hot reloading related code (srcServer)
    - config express to serv static files

    ```js
    import express from 'express';
    import path from 'path';
    import open from 'open';

    /*eslint-disable no-console */

    const port = 3000;
    const app = express();

    app.use(express.static('dist'));

    app.get('*', function(req, res){
        res.sendFile(path.join(__dirname, '../dist/index.html'));
    });

    app.listen(port, function (err){
        if(err){
            console.log(err);
        } else {
            open(`http://localhost:${port}`);
        }
    });

    ```

## Setup npm Scripts

- `"clean-dist": "npm run remove-dist && mkdir dist"`
    - gettin rid of the dist folder and recreate it 
    - mkdir is a cross-platform friendly command
- `"remove-dist": "node_modules/.bin/rimraf ./dist"`
    - `rimraf`: cross plataform way to be able to remove a folder forcefully (rm-rf equivalent)
- `"build:html": "babel-node tools/buildHtml.js"`
    - using babel node becouse we wrote tha build in ES6
- `"prebuild": "npm-run-all clean-dist test lint build:html"`
    - npm-run-all: is a corss plataform way too run multiple commands either ne at a time or in parallel. (with a parallel flag)
    - clean-dist will go first, then test, then lint, then build
- `"build": "babel-node tools/build.js"`
    - run our webpack build and generate our final bundle.js
    - as well as extracting our CSS into a separate file
- `"postbuild": "babel-node tools/distServer.js"`
    - will open up our dist server so we can see the results of our work

### package.json
```json
 "scripts": {
    ...,
    "clean-dist": "npm run remove-dist && mkdir dist",
    "remove-dist": "node_modules/.bin/rimraf ./dist",
    "build:html": "babel-node tools/buildHtml.js",
    "prebuild": "npm-run-all clean-dist test lint build:html",
    "build": "babel-node tools/build.js",
    "postbuild": "babel-node tools/distServer.js"
},
```

### use gzip with express

1. import compression library
    ```js
    import compression from 'compression';
    ```

2. use it with
    ```js
    app.use(compression());
    ```
    - this will enable gzip compression

- Drop babel-polyfill, toastr, jQuery, Bootstrap in order to minified even more to 64K
- You can make your own router (drop react-router) and get down around 50kg
- no way you can get near this with Angular 1, Angular 2, or Ember
- this light weigth is a clear benefit of choosing focused libraries like React and Reduxs

## Final Challenge

1. Author administration
    - sure add some logic that makes sure you can't delete an author who already has a course.

2. Delete course

3. Hide empty course list

4. Unsaved changes message
    - message to the user if they try to leae the ManageCourseForm without unsaved changes.  

5. Client-side validation
    - validate things like the category and the link data as well

6. Handle 404's on the ManageCoursePage
    - you gonna need to add some logic to mapStateToProps

7. Show # of courses in Header
    - greate example how redux sigle-store model really pays off
    - really trivial  

8. Pagination
    - add pagination or inifite scrolling to the tables that we're using in order to support large data sets

9. Sort course table
    - sort the course table alphabetically by title by default ( so the las record updated or created isn't always placed at the bottom like it is right now)
    - mapStateToProp is where you want to get this done

10. Revert abandoned changes
    - consider keeping the old values for course data so that you can revert changes when the user navigates to a different page withou saving 

-  help for this in the React and Flux course

## Summary

### Production build mattes
- 4.8MB -> 121K
