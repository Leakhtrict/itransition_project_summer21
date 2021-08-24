module.exports = (sequelize, DataTypes) => {
    const Collections = sequelize.define("Collections", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        theme: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imageURL: {
            type: DataTypes.STRING,
        },
        ownerUser: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        numField1_Name: {
            type: DataTypes.STRING,
        },
        numField1_isVisible: {
            type: DataTypes.BOOLEAN,
        },
        numField2_Name: {
            type: DataTypes.STRING,
        },
        numField2_isVisible: {
            type: DataTypes.BOOLEAN,
        },
        numField3_Name: {
            type: DataTypes.STRING,
        },
        numField3_isVisible: {
            type: DataTypes.BOOLEAN,
        },
        stringField1_Name: {
            type: DataTypes.STRING,
        },
        stringField1_isVisible: {
            type: DataTypes.BOOLEAN,
        },
        stringField2_Name: {
            type: DataTypes.STRING,
        },
        stringField2_isVisible: {
            type: DataTypes.BOOLEAN,
        },
        stringField3_Name: {
            type: DataTypes.STRING,
        },
        stringField3_isVisible: {
            type: DataTypes.BOOLEAN,
        },
        textField1_Name: {
            type: DataTypes.STRING,
        },
        textField1_isVisible: {
            type: DataTypes.BOOLEAN,
        },
        textField2_Name: {
            type: DataTypes.STRING,
        },
        textField2_isVisible: {
            type: DataTypes.BOOLEAN,
        },
        textField3_Name: {
            type: DataTypes.STRING,
        },
        textField3_isVisible: {
            type: DataTypes.BOOLEAN,
        },
        dateField1_Name: {
            type: DataTypes.STRING,
        },
        dateField1_isVisible: {
            type: DataTypes.BOOLEAN,
        },
        dateField2_Name: {
            type: DataTypes.STRING,
        },
        dateField2_isVisible: {
            type: DataTypes.BOOLEAN,
        },
        dateField3_Name: {
            type: DataTypes.STRING,
        },
        dateField3_isVisible: {
            type: DataTypes.BOOLEAN,
        },
        numberOfItems: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

    Collections.associate = (models) => {
        Collections.hasMany(models.Items, {
            onDelete: "cascade",
        });
    };

    return Collections;
}