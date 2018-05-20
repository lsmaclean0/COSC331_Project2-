//Server file 

const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();

const port = 5656;

app.use(bodyParser.urlencoded({ extended: true }));

//import from index.js
require('./app/routes')(app, {});
app.listen(port, () => {
  console.log('We are live on ' + port);
});


