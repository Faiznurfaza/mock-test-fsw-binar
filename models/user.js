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
      User.hasMany(models.List, { foreignKey: 'user_id', onDelete: "CASCADE"})
    }
  }
  User.init({
    username: DataTypes.STRING,
    password: {
      type: DataTypes.INTEGER,
      validate: {
        len: {
          args: [4, 20],
          msg: "Password must be between 4 and 20 characters"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};