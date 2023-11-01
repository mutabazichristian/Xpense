import cors from 'cors';
import express, { query } from 'express';
import mysql from 'mysql';
import tokens from './tokens.js';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import { nanoid } from 'nanoid';


//const cookieParser= require('cookie-parser');
const app = express();
const passwordConnect = tokens.passwordConnect;
const secretKey = tokens.secretKey;
const dbOptions = {
    host: 'localhost',
    user: 'mutabazi',
    password: passwordConnect,
    database: 'xpensedb',
    multipleStatements: true

};

const PORT = process.env.PORT || 8080;
var mysqlConnection = mysql.createConnection(dbOptions)
mysqlConnection.connect();
const corsOptions = {
    credentials: true,
    origin: 'http://localhost:3000'
}

app.use(express.json());
app.use(cookieParser())
app.use(cors());


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})

app.post('/login', (req, res) => {
    console.log("Log in requested");
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

            res.cookie('authCookie', token, { maxAge: 900000, httpOnly: false })



            return res.status(200).json({
                status: 'success login',
                user: user[0].email,
                token
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
            console.log(result)
            const expenses = result.map(row => {
                return [
                    row.title,
                    row.category,
                    row.amount,
                    row.date,
                    row.receipt,
                    row.description,
                    row.expenseId
                ];
            })
            res.json(expenses)
        }
    });
});

app.post('/newexpense', (req, res) => {

    console.log(req.body);
    const userid = 1;
    const title = req.body.newExpenseData[0];
    const category = req.body.newExpenseData[1];
    const amount = req.body.newExpenseData[2];
    const date = req.body.newExpenseData[3];
    var receiptImage;
    if (req.body.newExpenseData[4] && req.body.newExpenseData[4] !== "" && req.body.newExpenseData[4] !== null) {

        receiptImage = req.body.newExpenseData[4];
    } else {
        receiptImage = '';
    }
    const description = req.body.newExpenseData[5];
    const queryNewExpense = 'INSERT INTO Expense (userId, title, category, amount, dateCreated, receipt, expenseDescription) Values (? , ? , ? , ? , ? , ?, ? )';
    console.log(userid, title, category, amount, date, receiptImage, description)



    mysqlConnection.query(queryNewExpense, [userid, title, amount, category, date, receiptImage, description], (error, result) => {
        if (error) {
            console.log(error);
            res.status(400);
        } if (result) {
            console.log(result);
            res.json('we good we good');
        }
    })


});

app.post('/deleteexpense', (req, res) => {
    const queryDeleteExpense = 'DELETE FROM Expense WHERE ? = expenseId';
    console.log('this is the id to be deleted', req.body);
    const id = req.body.id;
    mysqlConnection.query(queryDeleteExpense, [id], (err, results) => {
        if (err) {
            console.log(err);
            res.json('error from server:', err);
        } if (results) {
            console.log(results);
            res.json('couldve worked');
        }
    })
})