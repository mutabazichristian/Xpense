'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class feedback extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: userId })
    }
  }
  feedback.init({
    feedbackId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    dateCreated: DataTypes.DATE,
    content: DataTypes.TEXT,
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'userId'
      }
    }
  }, {
    sequelize,
    modelName: 'feedback',
  });
  return feedback;
};