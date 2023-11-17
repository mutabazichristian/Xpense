'use strict';
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {




  class SystemAdmin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SystemAdmin.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    username: DataTypes.TEXT,
    adminPassword: DataTypes.TEXT,
    email: DataTypes.TEXT,
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },

  }, {
    sequelize,
    modelName: 'SystemAdmin',
    timestamps: true
  });
  return SystemAdmin;
}