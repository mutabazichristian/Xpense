import cors from 'cors';
import express, { query } from 'express';
import mysql from 'mysql';
import tokens from './tokens.js';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

//const cookieParser= require('cookie-parser');
const app = express();
const passwordConnect = tokens.passwordConnect;
const secretKey = tokens.secretKey;
const options = {
    host: 'localhost',
    user: 'mutabazi',
    password: passwordConnect,
    database: 'xpensedb',
    multipleStatements: true

};

const PORT = process.env.PORT || 8080;
var mysqlConnection = mysql.createConnection(options)
mysqlConnection.connect();
const corsOptions = { credentials: true }

app.use(express.json());
app.use(cookieParser())
app.use(cors());


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = 'SELECT * FROM User WHERE email = ? AND password = ?';
    mysqlConnection.query(sql, [email, password], (err, user) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        } if (user.length > 0) {
            const userId = user[0].id;
            const payload = {
                userId: userId,
                email: email
            }
            const token = jwt.sign(payload, secretKey, { expiresIn: '3h' });
            console.log('Generated Token', token);
            console.log('Given Credentials', email, password);
            res.cookie('authCookie', token, { maxAge: 900000, httpOnly: false })

            // console.log('cookies',res);

            return res.status(200).cookie('authCookie', token, { maxAge: 900000, httpOnly: false }).json({
                status: 'success login',
                user: user[0].email
            })

        } else {
            return res.status(401).json({ error: 'Invalid credentials' })
        }
    });
});

app.post('/expenses', (req, res) => {
    console.log('expenses request recieved');
    const queryGetExpense = 'SELECT * FROM Expense';
    mysqlConnection.query(queryGetExpense, (error, result, fields) => {
        if (error) {
            console.log(`the error message from query is ${error}`);
        } if (result.length > 0) {
            const expenses = result[0];
            res.send(expenses);
        }
    });
});
