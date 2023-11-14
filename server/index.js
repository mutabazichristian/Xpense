const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');
const sequelizeConnection = require('./config/DB/database.js');
const expensesRouter = require('./routes/signupRouter.js');
const signupRouter = require('./routes/signupRouter.js');
const userRouter = require('./routes/userRouter.js');

console.log("Hi");
// import userRouter from "./routes/userRouter.js";

const app = express();
const PORT = process.env.PORT || 8080;

var corsOptions = {
	origin: 'http://localhost:3000'
};
app.use(cors(corsOptions));
app.use('/login', userRouter);
app.use('/expenses', expensesRouter);
console.log(userRouter);
app.use('/signup', signupRouter);



sequelizeConnection.authenticate()
	.then(() => {
		console.log('Database connection has been established succesfully');
		return sequelizeConnection.sync();
	})
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}.`);
		});

	})
	.catch((error) => {
		console.log('unable to connnect to db', error);
	})


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
