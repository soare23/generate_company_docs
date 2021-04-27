const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('activity_codes', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  });
};
