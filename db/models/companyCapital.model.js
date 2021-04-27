const { DataTypes } = require('sequelize');

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
  sequelize.define('company_capital', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    social: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    socialPartValue: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  });
};
