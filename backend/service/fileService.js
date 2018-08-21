//fileService.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 6010;
const SERVICE_NAME = "fileService";

const FileServiceActions = require('./fileServiceActions');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/file', FileServiceActions);

app.listen(PORT, function(){
  console.log( SERVICE_NAME, 'is running on Port: ',PORT);
});


// Cors Whitelist
/*
// Set up a whitelist and check against it:
var whitelist = ['http://example1.com', 'http://example2.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// Then pass them to cors:
app.use(cors(corsOptions));
*/
