import { Sequelize } from "sequelize";
import tokens from "../tokens.js";

const url = `mysql://mutabazi/${tokens.passwordConnect}@locahost:3000/xpensedb`

const sequelizeConnection = new Sequelize(url, {
    dialect: 'mysql'
})

(async ()=>{
    try {
        
    }
})

export default sequelizeConnection;
// const sequelizeConnection = new Sequelize('xpensedb', 'mutabazi', tokens.passwordConnect, {
//     host: 'localhost',
//     dialect: 'mysql'
// });