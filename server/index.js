import cors from "cors";
import express, { query } from "express";
import cookieParser from "cookie-parser";
import sequelizeConnection from "./config/DB/database.js";
import expensesRouter from "./routes/expensesRouter.js";
import signupRouter from './routes/signupRouter.js'
import userRouter from './routes/userRouter.js'
console.log("Hi");
// import userRouter from "./routes/userRouter.js";

const app = express();
const PORT = process.env.PORT || 8080;

var corsOptions = {
origin: 'http://localhost:8080/'
};

app.use(cors(corsOptions));
app.use('/login', userRouter);
app.use('/expenses', expensesRouter);
app.use('/signup',signupRouter);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});


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
