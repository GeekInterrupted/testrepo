module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
    }, {
        timestamps: false
    });
    return User;
};