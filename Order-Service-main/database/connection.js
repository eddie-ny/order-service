const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('postgresql://neondb_owner:npg_3Iq8ramsDFXg@ep-cool-snowflake-a8qbomyh-pooler.eastus2.azure.neon.tech/neondb?sslmode=require', {
  dialect: 'postgres',
  logging: false
});

module.exports = sequelize;
