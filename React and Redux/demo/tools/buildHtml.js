import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

/*eslint-disable no-console*/

fs.readFile('src/index.html',  (err,markup) => {
    console.log("ains");
    if(err){
        return console.log(err);
    }

    // creates a handy in memory dom that i can query using simple jQuery selectors
    const $ = cheerio.load(markup); 

    //since a separated spreadsheet is only utilized for the production build, need to dynamically
    $('head').prepend('<link rel="stylesheet" href="styles.css">');

    fs.writeFile('dist/index.html', $.html(), function(err){
        if(err){
            return console.log(err);
        }
        console.log('index.html written to /dist'.green);
    });

});

// we could reference here a bug tracking feature etc
// done in react-redux-slingshot