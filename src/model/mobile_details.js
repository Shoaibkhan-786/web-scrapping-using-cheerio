const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const MobileInfo = sequelize.define('mobileinfo', {
        name: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.STRING
        },
        imgUrl: {
            type: DataTypes.STRING
        }
    })
    return MobileInfo;
}