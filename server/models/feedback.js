'use strict';
import { Model, DataTypes } from "sequelize";
import User from './user.js'
import db from './index.js'

const {sequelize} = db;

class Feedback extends Model {
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


Feedback.init({
  feedbackId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  dateCreated: DataTypes.DATE,
  content: DataTypes.TEXT,
  userId: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  modelName: 'feedback',
});

export default Feedback;