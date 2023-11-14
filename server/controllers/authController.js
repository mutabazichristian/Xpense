const express = require('express');
const mysqlConnection = require('../config/DB/index.js');
const tokens = require('../config/tokens.js');
const jwt = require('jsonwebtoken');
const { User } = require('../models/index.js');

const secretKey = tokens.secretKey;


const login = async (req, res) => {
	try {
		console.log("tryna log in huh?");

		const users = await User.findAll();
		console.log('the users are', users)
		// Perform your login logic here and potentially set the 'error' variable
		// Example: const error = await someAsyncFunction();

	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: 'Internal Server Error' });
	}



	// const sql = "SELECT * FROM User WHERE email = ? AND password = ?";
	// mysqlConnection.query(sql, [email, password], (err, user) => {
	// 	if (err) {
	// 		console.log(err);k
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

module.exports = { login };
