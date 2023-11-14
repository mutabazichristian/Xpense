'use strict';
const{ Model, DataTypes } =require ('sequelize');


module.exports=(sequelize,DataTypes)=>{

class Expense extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    this.belongsTo(models.User, { foreignKey: "userId" })
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
    type: DataTypes.INTEGER
  },
  title: DataTypes.STRING,
  category: DataTypes.STRING,
  amount: DataTypes.INTEGER,
  dateCreated: DataTypes.DATE,
  receipt: DataTypes.BLOB,
  expenseDescription: DataTypes.STRING,
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
  modelName: 'Expense',
  timestamps:true
});

return Expense;

}