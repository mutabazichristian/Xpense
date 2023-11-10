import cors from "cors";
import express, { query } from "express";
import cookieParser from "cookie-parser";
import sequelizeConnection from "./config/DB/database.js";
import expensesRouter from "./routes/expensesRouter.js";
console.log('Hi');
// import userRouter from "./routes/userRouter.js";

const app = express();
// app.use(bodyParser.json());
// app.use(cors(corsOptions));
// app.use('/login', userRouter);
// app.use('/expenses', expensesRouter);
// const PORT = process.env.PORT || 8080;
// var corsOptions = {
// 	origin: 'http://localhost:8080/'
// };


app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});

// parse requests of content-type - application/json





// parse requests of content-type - application/x-www-form-urlencoded

// app.use(bodyParser.urlencoded({ extended: true }));


// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const userRouter = await import('./routes/userRouter');
// const expensesRouter = await import('./routes/expensesRouter');
// const app = express();
// //const cookieParser= require('cookie-parser');
// const app = express();

// const PORT = process.env.PORT || 8080;
// app.use(express.json());
// app.use(cookieParser());
// app.use(cors());


// app.use("/login", userRouter);
// app.use("/signup", userRouter);
// app.use("/expenses", expensesRouter);


// console.log("trying the db connnection...");


// sequelizeConnection.authenticate();	
// console.log('connection established;');

// app.listen(PORT, () => {
// 	console.log(`listening on ${PORT}`);
// })

// app.use((err, req, res, next) => {
// 	console.error(err.stack);
// 	res.status(500).send('Something went wrong!');
// });