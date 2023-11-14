const jwt = require('jsonwebtoken');
const { User } = require('../models/index.js');
const tokens = require('../config/tokens.js');

const secretKey = tokens.secretKey;

const login = async (email, password) => {
	try {
		console.log("Attempting login...");
		console.log('Credentials:', { email, password });

		const user = await User.findOne({
			where: { email, password }
		});
		console.log(!!user);
		console.log(user.dataValues);
		if (!!user && !!user.dataValues) {
			console.log('Hi');
			const payload = {
				userId: user.dataValues.userId,
				email: user.dataValues.email
			};
			const token = jwt.sign(payload, secretKey, { expiresIn: "3h" });
			console.log("Generated Token:", token);

			return {
				success: true,
				data: {
					status: "success login",
					userEmail: user.dataValues.email,
					token
				}
			};
		} else {
			return {
				success: false,
				data: { message: 'Invalid credentials' }
			};
		}
	} catch (error) {
		console.error(error);
		return {
			success: false,
			data: { message: 'Internal Server Error' }
		};
	}
};

module.exports = { login };