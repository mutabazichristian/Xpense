import cors from 'cors';
import express from 'express';
import mysql from 'mysql';
import tokens from './tokens.js';
import jwt from 'jsonwebtoken';

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


app.use(express.json());
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
            return res.send(token);

        } else {
            return res.status(401).json({ error: 'Invalid credentials' })
        }
    });
});

app.post('/expenses', (req, res) => {

    console.log(req.session);
});
