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
            new ExtractTextPlugin('style.css'),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin()
        ],

        // here we tell webpack the types of files we want to handle
        module: {
            loaders: [
                { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel'] },
                { test: /(\.css)$/, loaders:ExtractTextPlugin.extract("css?sourceMap") },
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
    - `ExtractTextPlugin('style.css')`
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
    { test: /(\.css)$/, loader:ExtractTextPlugin.extract("css?sourceMap") },
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