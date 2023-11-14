'use strict';
const { DataTypes, Model } =require ("sequelize");

module.exports=(sequelize,DataTypes)=>{

class UserAdmin extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
UserAdmin.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  username: DataTypes.TEXT,
  adminPassword: DataTypes.TEXT,
  email: DataTypes.TEXT
}, {
  sequelize,
  modelName: 'UserAdmin',
});

return UserAdmin

}