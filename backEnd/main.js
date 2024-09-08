const express = require("express");
const app = express();
const port = 3010;
const fs=require("fs");
const textDir="./assets/userFiles/";

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!ss");
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