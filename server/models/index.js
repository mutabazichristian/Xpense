'use strict';
import fs from 'fs';
import path from 'path';
import process from 'process';
import Sequelize from 'sequelize';
import { fileURLToPath } from 'url';
import config from '../config/config.js'; 

const db = {};
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

const envConfig = config[env];

let sequelize;
if (envConfig.use_env_variable) {
  sequelize = new Sequelize(process.env[envConfig.use_env_variable], envConfig);
} else {
  sequelize = new Sequelize(envConfig.database, envConfig.username, envConfig.password, envConfig);
}

const files = fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  });

for (const file of files) {
  const filePath = fileURLToPath(new URL(file, import.meta.url));
  const modelModule = await import(filePath);
  const modelFn = modelModule.default;
  const model = modelFn(sequelize, Sequelize.DataTypes);
  db[model.name] = model;

  if (model.associate) {
    model.associate(db);
  }
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
