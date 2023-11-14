'use strict';
const { Model, DataTypes } =require("sequelize");


module.exports=(sequelize,DataTypes)=>{
class Feedback extends Model {
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
  },
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
  modelName: 'feedback',
  timestamps:true
});

return Feedback;

}