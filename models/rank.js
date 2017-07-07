//Most contaminated cities in the US by rank - at risk population
"use strict";

module.exports = function(sequelize, DataTypes) {
    var Rank = sequelize.define("Rank", {
        rank2015: DataTypes.INTEGER,
        metroArea: DataTypes.STRING,
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

    return Rank;
};