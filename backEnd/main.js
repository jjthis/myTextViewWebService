const express = require("express");
const app = express();
const port = 3010;
const fs=require("fs");
const multer = require('multer');
const base64Url = require('./base64Url.js');

///https://063c77ec-cfa9-4a5e-b257-62c5f0c0e342-00-udpmwag5y4f1.sisko.replit.dev:8080/


const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send(base64Url.encodeBase64("Hello World!ss"));
});

const textDir="./assets/userFiles/";
const storage = multer.diskStorage({
  destination: textDir,
  filename: function(req, file, cb) {
    cb(null, base64Url.encodeBase64(file.originalname) );
  }
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 100000000 }
});

app.post("/upload", upload.single("files"), function(req, res, next) {
    res.send({
      fileName: req.file.filename
    });
  });

app.get("/fileList", (req, res) => {
  res.send(fs.readdirSync(textDir));
});

app.get("/file/:id", (req, res) => {
  const q = req.params;
  const qr=req.query;
  let line=qr.line?qr.line:0;
  line=line|0;
  console.log(line);
  try{
    let data=(fs.readFileSync(textDir+decodeURIComponent(q.id))+"").split('\n');
    // console.log(data.slice(3));
    res.send(data.slice(line,line+70).join('\n'));
  }catch(e){
    res.send(e.toString());
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});