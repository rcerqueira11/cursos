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