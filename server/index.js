const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var corsOptions = {
	origin: 'http://localhost:8080/'
		};
app.use (cors(corsOptions));

// parse requests of content-type - application/json

app.use (bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded

app.use (bodyParser.urlencoded({extended:true}));

//simple route
app.get ('/', (req, res) => {
res.json({message: 'Welcome to Turing.com'});
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log (`Server is running on port ${PORT}.` );
});


// // import cors from "cors";
// import express, { query } from "express";
// import cookieParser from "cookie-parser";
// import sequelizeConnection from "./config/DB/database.js";

// import expensesRouter from "./routes/expensesRouter.js";
// import userRouter from "./routes/userRouter.js";

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