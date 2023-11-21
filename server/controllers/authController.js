const jwt = require('jsonwebtoken');
const { User, UserAdmin, SystemAdmin } = require('../models/index.js');

//secret key to encode jwt token for authentication
const secretKey = process.env.JWT_SECRET_KEY;
//bunch

//function to create JWT token for existing user
const generateToken = (id, email) => {

	const payload = {
		id,
		email
		// userId: isUser.dataValues.userId,
		// email: isUser.dataValues.email
	};
	const token = jwt.sign(payload, secretKey, { expiresIn: "3h" });
	console.log("Generated Token:", token);
	return token
}

//exported function to authenticate
const login = async (email, password) => {
	try {
		var userType;
		console.log("Attempting login...");
		console.log('Credentials:', { email, password });


		//CHECK IF IT IS A USER??
		const isUser = await User.findOne({
			where: { email, password }
		});

		console.log(!!isUser);
		console.log(isUser.dataValues);

		if (!!isUser && !!isUser.dataValues) {
			console.log('meh, just a user');
			userType = 'user';
			const token = generateToken(isUser.dataValues.userId, isUser.dataValues.email);

			return {
				success: true,
				data: {
					status: "success login",
					userEmail: isUser.dataValues.email,
					token,
					userType
				}
			};

		}


		//CHECK IF IT IS USER ADMIN
		const isUserAdmin = await UserAdmin.findOne({
			where: { email, password }
		})
		if (!!isUserAmdin && !!isUserAdmin.dataValues) {
			console.log('it is a user admin');
			userType = 'userAdmin';
			const token = generateToken(isUserAdmin.dataValues.id, isUserAdmin.dataValues.email);
			return {
				success: true,
				data: {
					status: "success login",
					userEmail: isUserAdmin.dataValues.email,
					token,
					userType
				}
			}
		}


		//CHECK IF IT IS A SYSTEM ADMIN
		const isSystemAdmin = await SystemAdmin.findOne({
			where: { email, password }
		})
		if (!!isSystemAdmin && !!isSystemAdmin.dataValues) {
			console.log('it is a system admin');
			userType = 'systemadmin';
			const token = generateToken(isSystemAdmin.dataValues.id, isSystemAdmin.dataValues.email);
			return {
				status: 'success login',
				userEmail: isSystemAdmin.dataValues.email,
				token,
				userType
			}
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