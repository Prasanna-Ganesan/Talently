const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_URI, { dialect: 'postgres' });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, DataTypes);
db.Store = require('./store')(sequelize, DataTypes);
db.Rating = require('./rating')(sequelize, DataTypes);

// Associations
db.User.hasMany(db.Rating);
db.Rating.belongsTo(db.User);
db.Store.hasMany(db.Rating);
db.Rating.belongsTo(db.Store);
db.User.hasOne(db.Store);
db.Store.belongsTo(db.User);

module.exports = db;
