function applyExtraSetup(sequelize) {
  const {
    activity_codes,
    company,
    company_capital,
    contact,
    headquarter,
    persons_in_company,
    user,
  } = sequelize.models;

  user.hasMany(company);
  company.belongsTo(user);
  company.hasMany(persons_in_company);
  persons_in_company.belongsTo(company);
  company.hasOne(contact);
  contact.belongsTo(company);
  company.hasOne(headquarter);
  headquarter.belongsTo(company);
  company.hasOne(company_capital);
  company_capital.belongsTo(company);
  headquarter.hasMany(activity_codes);
  headquarter.belongsTo(company);
  activity_codes.belongsTo(headquarter);
}

module.exports = { applyExtraSetup };
