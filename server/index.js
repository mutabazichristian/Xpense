import cors from "cors";
import express, { query } from "express";

import cookieParser from "cookie-parser";

import expensesRouter from "./routes/expensesRouter.js";
import userRouter from "./routes/userRouter.js";

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

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
