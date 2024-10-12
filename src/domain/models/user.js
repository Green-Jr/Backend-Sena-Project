const { DataTypes } = require('sequelize');
const sequelize = require('../../infrastructure/Config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
    field: 'ID' 
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'NAME' 
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    field: 'EMAIL'
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'PASSWORD'
  },
  role: {
    type: DataTypes.ENUM('user', 'admin'),
    defaultValue: 'user',
    field: 'ROLE' 
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,  
    field: 'CREATEDAT' // Forzar el nombre de la columna a mayúsculas
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,  
    field: 'UPDATEDAT' // Forzar el nombre de la columna a mayúsculas
  }
}, {
  schema: 'EASY_MARKET',
  tableName: 'USERS', 
  timestamps: false
});

module.exports = User;
