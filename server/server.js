import mysql from 'mysql';
import express from 'express';
import bodyParser from 'body-parser';
import passwordConnect from './passwordConnect.js';

const PORT = process.env.PORT || 8080;
const app = express();

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'mutabazi',
    password: passwordConnect,
    database: 'xpensedb',
    multipleStatements: true
})
mysqlConnection.connect();
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})


app.get('*', (req,res)=>{
})

