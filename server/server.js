import mysql from 'mysql';
import express from 'express';
import cors from 'cors';
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
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})

app.post('/login',(req,res)=>{
    const sql = 'SELECT * FROM User WHERE email = ? AND password = ?';

    mysqlConnection.query(sql,[req.body.email, req.body.password],(err,data)=>{
        if(err) return res.json('Login Failed');
        if (data.length > 0){
            return res.json("Log in successfully");
        }else{
            return res.json('no record')
        }
    })
})
