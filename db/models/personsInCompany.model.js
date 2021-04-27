const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('persons_in_company', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    CNP: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    IDnumber: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    releasedBy: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    releasedAtDate: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    admin: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    associate: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
  });
};
