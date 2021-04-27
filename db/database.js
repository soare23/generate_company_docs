const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./extraSetup');
require('dotenv/config');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
  },
  {
    define: {
      freezeTableName: true,
    },
  }
);

const modelDefiners = [
  require('./models/user.model'),
  require('./models/activitiyCodes.model'),
  require('./models/companyCapital.model'),
  require('./models/companyInfo.model'),
  require('./models/contact.model'),
  require('./models/headQuarter.model'),
  require('./models/personsInCompany.model'),
  // Add more models here...
  // require('./models/item'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

// We execute any extra setup after the models are defined, such as adding associations.
applyExtraSetup(sequelize);

sequelize.sync();

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;
