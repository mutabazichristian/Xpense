'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(expense)
    }
  }
  User.init({
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    firstName: DataTypes.TEXT,
    otherName: DataTypes.TEXT,
    password: DataTypes.TEXT,
    email: DataTypes.TEXT,
    maxExpense: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};