const express = require("express");
const app = express();
const port = 3000;
const host = "0.0.0.0";
const path = require('path');

app.use(express.static(path.join(__dirname, "build")));
app.use(express.static("public"));

app.listen(port, host, () => {console.log(`server started at port ${port}`)});
