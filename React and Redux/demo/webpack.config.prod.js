import webpack from 'webpack';
import path from 'path';

const GLOBALS = {
    'process.env.NODE_ENV' : JSON.stringify('production')    
};

export default {
    debug: true,
    devtool: 'source-map',
    noInfo: false, // in fall wp will display a list o fall the files that it's bundling 
    
    
    // entry points for the aplication 
    entry: path.resolve(__dirname, 'src/index'),



    target: 'web', //we could use node if we are using
    // web it understand that need to bundle up the code in a way that the web browser can understand
    // node if we are using webpack to build an app running in node, so bundle up in a way that node can work with it

    // where it should create our web bundle
    // webpack wont generate any actual physical files, it will serve files from memory
    output: {
        path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    // need to define a path and a name to simulate the phisical file's existence
    // app will run from dist folder 


    //we tell webpack where our source code is
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    },
    plugins: [
    ],

    // here we tell webpack the types of files we want to handle
    module: {
        loaders: [
            { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel'] }, //javascript adn while working with it we want to use babel to transpile our code
            //great thing about webpack is we can teach it to know more than just javascript, css, font, saas, less even images if we like
            { test: /(\.css)$/, loaders: ['style', 'css'] },
            
            // jst necessary for the file types that bootstrap utilizes for fonts 
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
        ]
    }
};