import { SystemAdmin } from '../models/index'

const createSystemAdmin = async (req, res) => {
    console.log('this is the req', req);
    console.log(await SystemAdmin.getAll())
}

module.exports = { createSystemAdmin };