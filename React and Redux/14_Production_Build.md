## Intro

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