const parse = require('mrz').parse;

let mrz = [
    'I<UTOD23145890<1233<<<<<<<<<<<',
    '7408122F1204159UTO<<<<<<<<<<<6',
    'ERIKSSON<<ANNA<MARIA<<<<<<<<<<'
];

var result = parse(mrz);
console.log(result);