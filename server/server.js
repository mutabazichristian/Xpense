const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
var app = express();
const PORT = process.env.PORT || 8080;
const {authenticate} = require("./authenticate");

//configuring express server
app.use(bodyparser.json());
authenticate(mysql)
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}..`);
})
