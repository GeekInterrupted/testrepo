//Days with AQI by County 2016 data
"use strict";

module.exports = function(sequelize, DataTypes) {
    var Annual16 = sequelize.define("Annual16", {
        DayQuality: DataTypes.STRING,
        Bell: DataTypes.INTEGER,
        Bexar: DataTypes.INTEGER,
        Bowie: DataTypes.INTEGER,
        Brazoria: DataTypes.INTEGER,
        Brewster: DataTypes.INTEGER,
        Cameron: DataTypes.INTEGER,
        Collin: DataTypes.INTEGER,
        Dallas: DataTypes.INTEGER,
        Denton: DataTypes.INTEGER,
        Ector: DataTypes.INTEGER,
        ElPaso: DataTypes.INTEGER,
        Ellis: DataTypes.INTEGER,
        Fayette: DataTypes.INTEGER,
        Galveston: DataTypes.INTEGER,
        Gregg: DataTypes.INTEGER,
        Harris: DataTypes.INTEGER,
        Harrison: DataTypes.INTEGER,
        Hidalgo: DataTypes.INTEGER,
        Hood: DataTypes.INTEGER,
        Hunt: DataTypes.INTEGER,
        Jefferson: DataTypes.INTEGER,
        Johnson: DataTypes.INTEGER,
        Kaufman: DataTypes.INTEGER,
        Kleberg: DataTypes.INTEGER,
        Maverick: DataTypes.INTEGER,
        McLennan: DataTypes.INTEGER,
        Montgomery: DataTypes.INTEGER,
        Navarro: DataTypes.INTEGER,
        Nueces: DataTypes.INTEGER,
        Orange: DataTypes.INTEGER,
        Parker: DataTypes.INTEGER,
        Polk: DataTypes.INTEGER,
        Potter: DataTypes.INTEGER,
        Randall: DataTypes.INTEGER,
        Rockwall: DataTypes.INTEGER,
        Smith: DataTypes.INTEGER,
        Tarrant: DataTypes.INTEGER,
        Travis: DataTypes.INTEGER,
        Victoria: DataTypes.INTEGER,
        Webb: DataTypes.INTEGER
    }, {
        timestamps: false
    })
    return Annual16;
};