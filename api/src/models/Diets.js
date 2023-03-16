const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('diets',{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            unique: true,
        },
        name:{
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        }
    },{
        timestamps: false,
    })
}