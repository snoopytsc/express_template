// FileServiceActions.js

const express = require('express');
const app = express();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const FileServiceUploadAction = express.Router();
const FileServiceUnzipAction = express.Router();

const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../uploads'));
      },
      filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
      },
    });

const upload = multer({ storage : storage });

FileServiceUploadAction.route('/upload').post(upload.single('file'), (req, res) => {
          var response = {
            "msg": "file uploaded",
            "filename_new" : req.file.filename,
            "filename_old" : req.file.originalname,
            "type" : req.file.mimetype,
            "size" : req.file.size
          }
          res.send(response);
        });

FileServiceUnzipAction.route('/unzip').post(upload.single('file'), (req, res) => {
                  var response = {
                    "msg": "file uploaded",
                    "filename_new" : req.file.filename,
                    "filename_old" : req.file.originalname,
                    "type" : req.file.mimetype,
                    "size" : req.file.size
                  }
                  res.send(response);
                });


module.exports = FileServiceUploadAction;
