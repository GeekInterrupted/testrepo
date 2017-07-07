module.exports = function(sequelize, DataTypes) {
    var Donation = sequelize.define("Donation", {
        donation: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },

        // grab user id  matches with
        // users data table
        userId: DataTypes.INTEGER

    }, {
        //User can have multiple Donations
        classMethods: {
            associate: function(models) {
                // A User (foreignKey) is required or a Donation can't be made
                Donation.belongsTo(models.User, {
                    foreignKey: {
                        allowNull: false
                    }
                });
            },
        },
        timestamps: false
    });
    return Donation;
};