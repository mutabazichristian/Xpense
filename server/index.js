import cors from "cors";
import express, { query } from "express";
import cookieParser from "cookie-parser";
import sequelizeConnection from "./config/DB/database.js";

import expensesRouter from "./routes/expensesRouter.js";
import userRouter from "./routes/userRouter.js";


const appInit = async () => {
	console.log("trying the db connnection...");

	try {
		await sequelizeConnection.authenticate();
		console.log('connection established;')
		
		app.listen(PORT, ()=>{
		console.log(`listening on port ${PORT}`);
		})
	}
	catch (error) {
		console.error("unable to connect to the db:", error.original);s
	}
}

//const cookieParser= require('cookie-parser');
const app = express();

const PORT = process.env.PORT || 8080;

// const corsOptions = {
// 	credentials: true,
// 	origin: "http://localhost:3000",
// };

app.use(express.json());
app.use(cookieParser());
app.use(cors());	

app.use("/login", userRouter);
app.use("/signup", userRouter);
app.use("/expenses", expensesRouter);

appInit();