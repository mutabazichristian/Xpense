import { Sequelize } from "sequelize";
import tokens from "../tokens.js";
const sequelizeConnection = new Sequelize('xpensedb', 'mutabazi', tokens.passwordConnect, {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelizeConnection;