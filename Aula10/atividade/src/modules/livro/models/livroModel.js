const { DataTypes } = require('sequelize');
const {sequelize} = require('../../../config/configDB');

const LivroModel = sequelize.define('Livro', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  autor: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  titulo: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  ano_publicacao: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  genero: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false
  }

},
{
  tableName: 'livro',
  createdAt: 'criado_em',
  updatedAt: 'atualizado_em'
});

module.exports = LivroModel;