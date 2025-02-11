import { DataTypes } from 'sequelize';
import sequelize from '../../infrastructure/Config/database.js';

const Product = sequelize.define('Product', {
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
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    field: 'PRICE'
  },
  url: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'URL'
  },
  image_url: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'IMAGE_URL'
  },
  iduser: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: {
        schema: 'EASY_MARKET', // Especifica el esquema
        tableName: 'USERS'    // Cambia 'User' por 'USERS'
      },
      key: 'ID'               // Cambia 'id' por 'ID' para que coincida con la base de datos
    },
    field: 'IDUSER'
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
    field: 'CREATEDAT'
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
    field: 'UPDATEDAT'
  }
}, {
  schema: 'EASY_MARKET',
  tableName: 'PRODUCTS',
  timestamps: false
});

export default Product;
