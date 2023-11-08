import mysql from "mysql";
import tokens from "./../tokens.js";

const passwordConnect = tokens.passwordConnect;
const dbOptions = {
	host: "localhost",
	user: "mutabazi",
	password: passwordConnect,
	database: "xpensedb",
	multipleStatements: true,
};

var mysqlConnection = mysql.createConnection(dbOptions);
mysqlConnection.connect();

export default mysqlConnection;
 
