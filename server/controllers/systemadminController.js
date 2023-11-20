const { SystemAdmin } = require('../models/systemadmin');

const createSystemAdmin = async (req, res) => {
    console.log('this is the req', req);
    console.log('what happened',SystemAdmin.create())
    return res.json('tryna create an admin huh?')
}

module.exports = { createSystemAdmin };