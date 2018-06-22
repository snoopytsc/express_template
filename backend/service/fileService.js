//fileService.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 6010;
const SERVICE_NAME = "fileService";

const FileServiceActions = require('./FileServiceActions');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/file', FileServiceActions);

app.listen(PORT, function(){
  console.log( SERVICE_NAME, 'is running on Port: ',PORT);
});
