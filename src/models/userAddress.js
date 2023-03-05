'use strict';
import User from './user'
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserAddress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  }
  UserAddress.init({
    user_id: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    postal_code: DataTypes.CHAR,
    country: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'UserAddress',
  });
  return UserAddress;
};