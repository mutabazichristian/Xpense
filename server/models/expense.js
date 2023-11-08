'use strict';
import { Model, DataTypes } from 'sequelize';
import User from './user.js'

class Expense extends Model {
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

Expense.init({
  expenseId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'userId'
    }
  },
  title: DataTypes.VARCHAR,
  category: DataTypes.VARCHAR,
  amount: DataTypes.INTEGER,
  dateCreated: DataTypes.date,
  receipt: DataTypes.BLOB,
  expenseDescription: DataTypes.VARCHAR
}, {
  sequelize,
  modelName: 'Expense',
});


export default Expense;