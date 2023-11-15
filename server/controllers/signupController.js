const { User } = require('../models/index.js');

const createNewUser = async (firstName, otherName, email, password, maxExpense) => {
    console.log('Trying to create a new user:', firstName, otherName, email, password, maxExpense);

    try {
        const [newUser, created] = await User.findOrCreate({
            where: { email },
            defaults: {
                firstName,
                otherName,
                password,
                maxExpense,
                createdAt: null,
                updatedAt: null
            }
        });

        if (created) {
            console.log('New user created:', newUser);
            return { isEmailTaken: false, newUser };
        } else {
            console.log('Email is already taken.');
            return { isEmailTaken: true };
        }
    } catch (error) {
        console.error('Error creating a new user:', error);
        return { isEmailTaken: false, error: 'Internal Server Error' };
    }
};

module.exports = { createNewUser };
