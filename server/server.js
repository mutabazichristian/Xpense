import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mysql from 'mysql';
import passwordConnect from './passwordConnect.js';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = process.env.PORT || 8080;

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'mutabazi',
    password: passwordConnect,
    database: 'xpensedb',
    multipleStatements: true
})
mysqlConnection.connect();
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})

app.post('/login', (req, res) => {
    const sql = 'SELECT * FROM User WHERE email = ? AND password = ?';

    mysqlConnection.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) return res.json('Login Failed');
        if (data.length > 0) {
            //create a session Id
            const sesssionId = generateSessionId();
            res.json({
                sesssionId: sesssionId
            })
            return res.json("Log in successfully");
        } else {
            return res.json('no record')
        }
    })
})


function generateSessionId() {
    return uuidv4();
}