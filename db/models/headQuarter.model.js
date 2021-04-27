const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('headquarter', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    social: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
