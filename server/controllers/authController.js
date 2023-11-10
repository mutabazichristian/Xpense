import mysqlConnection from "./../config/DB/index.js";
import tokens from "./../config/tokens.js";
import jwt from "jsonwebtoken";
import dpkg from "../models/index.cjs";
const { User } = dpkg;

const secretKey = tokens.secretKey;

const login = async (req, res) => {
	try {
		console.log("wokring");
		res.json("working");
	} catch (error) {
		console.log(error);
		console.log("error");
	}

	// const sql = "SELECT * FROM User WHERE email = ? AND password = ?";
	// mysqlConnection.query(sql, [email, password], (err, user) => {
	// 	if (err) {
	// 		console.log(err);
	// 		return res.status(500).json({ error: "Internal Server Error" });
	// 	}
	// 	if (user.length > 0) {
	// 		const userId = user[0].id;
	// 		const payload = {
	// 			userId: userId,
	// 			email: email,
	// 		};
	// 		const token = jwt.sign(payload, secretKey, { expiresIn: "3h" });
	// 		console.log("Generated Token", token);

	// 		res.cookie("authCookie", token, { maxAge: 900000, httpOnly: false });

	// 		return res.status(200).json({
	// 			status: "success login",
	// 			user: user[0].email,
	// 			token,
	// 		});
	// 	} else {
	// 		return res.status(401).json({ error: "Invalid credentials" });
	// 	}
	// });
};

export { login };
