const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Scrap_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

const connection = async () => {
    await sequelize.authenticate()
}

const db = {};

db.connection = connection;
db.sequelize = sequelize;

db.mobileInfo = require('./mobile_details')(sequelize);



sequelize.sync()
    .then(() => console.log('models synced successfully'))
    .catch((err) => console.log(err.message) )

module.exports = db;