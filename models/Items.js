module.exports = (sequelize, DataTypes) => {
    const Items = sequelize.define("Items", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tags: {
            type: DataTypes.STRING,
        },
        numField1: {
            type: DataTypes.DOUBLE,
        },
        numField2: {
            type: DataTypes.DOUBLE,
        },
        numField3: {
            type: DataTypes.DOUBLE,
        },
        stringField1: {
            type: DataTypes.STRING,
        },
        stringField2: {
            type: DataTypes.STRING,
        },
        stringField3: {
            type: DataTypes.STRING,
        },
        textField1: {
            type: DataTypes.TEXT,
        },
        textField2: {
            type: DataTypes.TEXT,
        },
        textField3: {
            type: DataTypes.TEXT,
        },
        dateField1: {
            type: DataTypes.DATE,
        },
        dateField2: {
            type: DataTypes.DATE,
        },
        dateField3: {
            type: DataTypes.DATE,
        },
    });

    Items.associate = (models) => {
        Items.hasMany(models.Comments, {
            onDelete: "cascade",
        });

        Items.hasMany(models.Likes, {
            onDelete: "cascade",
        });
    };

    return Items;
}