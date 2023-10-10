import mysql from 'mysql';
import express from 'express';
import bodyParser from 'body-parser';
import passwordConnect from './passwordConnect.js';

var app = express(mysql);
const PORT = process.env.PORT || 8080;

console.log(passwordConnect)


//configuring express server
app.use(bodyParser.json());

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: 'mutabazi',
    password: passwordConnect,
    database: 'xpensedb',
    multipleStatements: true
});
mysqlConnection.connect((err) => {
    if (!err)
        console.log('Connection to db Established Successfully');
    else
        console.log('Connection to db Failed' + JSON.stringify(err, undefined, 2));
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}..`);
})

app.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM User', (err,rows,fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err)
    })
});
