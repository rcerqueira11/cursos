const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

// tell the app that anything that comes with /graphql should be handled by graphql

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true //allows us to make request to development server, only for dev
}));

app.listen(4000,()=>{
  console.log('Listening');
});

// go to http://localhost:4000/graphql