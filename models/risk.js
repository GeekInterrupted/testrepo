//At risk population by county (TX)
"use strict";

module.exports = function(sequelize, DataTypes) {
    var Risk = sequelize.define("Risk", {
        county: DataTypes.STRING,
        totalPop: DataTypes.INTEGER,
        under18: DataTypes.INTEGER,
        over65: DataTypes.INTEGER,
        pedAsthma: DataTypes.INTEGER,
        adultAsthma: DataTypes.INTEGER,
        copd: DataTypes.INTEGER,
        cvDisease: DataTypes.INTEGER,
        poverty: DataTypes.INTEGER,

    }, {
        timestamps: false
    })

    return Risk;
};