require('dotenv').config();
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const sequelizeConnection = require('./config/DB/database.js');
const userRouter = require('./routes/userRouter.js')
const signupRouter = require('./routes/signupRouter.js');
const expensesRouter = require('./routes/signupRouter.js');
const systemadminRouter = require('./routes/systemadminRouter.js')
// import userRouter from "./routes/userRouter.js";

const app = express();
const PORT = process.env.PORT || 8080;

var corsOptions = {
	origin: 'http://localhost:3000'
};
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use('/login', userRouter);
app.use('/expenses', expensesRouter);
app.use('/signup', signupRouter);
app.use('/systemadmin', systemadminRouter);


sequelizeConnection.authenticate()
	.then(() => {
		console.log('Database connection has been established succesfully');
		return sequelizeConnection.sync();
	})
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}.`);
			console.log('this is the env username', process.env.DB_USERNAME);
		});

	})
	.catch((error) => {
		console.log('unable to connnect to db', error);
	})
