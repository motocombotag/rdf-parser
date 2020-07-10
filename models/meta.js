const Sequelize = require('sequelize');
const sequelize = require('../sequelize');

const Meta = sequelize.define('Meta', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING
  },
  license_rights: {
    type: Sequelize.STRING(512)
  },
  language: {
    type: Sequelize.STRING
  },
  publisher: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

module.exports = Meta; 
