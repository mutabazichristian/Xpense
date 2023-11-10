"use strict";
var fs = require('fs');
var path = require('path');
var process = require('process');
var Sequelize = require('sequelize');
var configPath = '../config/config.js';

async function initialize() {
	var db = {};
	var __dirname = path.resolve();

	var basename = path.basename(__filename);
	var env = process.env.NODE_ENV || "development";

	var envConfig = await import(configPath)[env];

	var sequelize;
	if (envConfig.use_env_variable) {
		sequelize = new Sequelize(process.env[envConfig.use_env_variable], envConfig);
	} else {
		sequelize = new Sequelize(
			envConfig.database,
			envConfig.username,
			envConfig.password,
			envConfig
		);
	}

	var files = fs.readdirSync(__dirname);
	for (var i = 0; i < files.length; i++) {
		var file = files[i];
		if (
			file.indexOf(".") !== 0 &&
			file !== basename &&
			file.slice(-3) === ".js" &&
			file.indexOf(".test.js") === -1
		) {
			var filePath = path.resolve(__dirname, file);
			var modelModule = await import(filePath);
			var modelFn = modelModule.default;
			var model = modelFn(sequelize, Sequelize.DataTypes);
			db[model.name] = model;

			if (model.associate) {
				model.associate(db);
			}
		}
	}

	db.sequelize = sequelize;
	db.Sequelize = Sequelize;

	console.log("this is db", db);
	return db
}

const db = initialize();

module.exports = db;

// "use strict";
// const fs = require('fs');
// const path = require('path');
// const process = require('process');
// const Sequelize = require('sequelize');
// const config = require('../config/config.js');

// const db = {};
// const __dirname = path.resolve();

// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || "development";

// const envConfig = config[env];

// let sequelize;
// if (envConfig.use_env_variable) {
// 	sequelize = new Sequelize(process.env[envConfig.use_env_variable], envConfig);
// } else {
// 	sequelize = new Sequelize(
// 		envConfig.database,
// 		envConfig.username,
// 		envConfig.password,
// 		envConfig
// 	);
// }

// const files = fs.readdirSync(__dirname).filter((file) => {
// 	return (
// 		file.indexOf(".") !== 0 &&
// 		file !== basename &&
// 		file.slice(-3) === ".js" &&
// 		file.indexOf(".test.js") === -1
// 	);
// });

// for (const file of files) {
// 	const filePath = path.resolve(__dirname, file);
// 	const modelModule = await import(filePath);
// 	const modelFn = modelModule.default;
// 	const model = modelFn(sequelize, Sequelize.DataTypes);
// 	db[model.name] = model;

// 	if (model.associate) {
// 		model.associate(db);
// 	}
// }

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// console.log("this is db", db);

// export default db;

// // import fs from "fs";
// // import path from "path";
// // import process from "process";
// // import Sequelize from "sequelize";
// // import config from "../config/config.js";