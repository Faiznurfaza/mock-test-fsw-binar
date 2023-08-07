'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class List extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      List.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: "CASCADE"
      })
    }
  }
  List.init({
    user_id: DataTypes.INTEGER,
    list: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'List',
  });
  return List;
};