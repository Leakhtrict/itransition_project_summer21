module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isBlocked: {
            type: DataTypes.BOOLEAN,
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
        },
    });

    Users.associate = (models) => {
        Users.hasMany(models.Collections, {
            onDelete: "cascade",
        });

        Users.hasMany(models.Comments, {
            onDelete: "cascade",
        });

        Users.hasMany(models.Likes, {
            onDelete: "cascade",
        });
    };

    return Users;
};