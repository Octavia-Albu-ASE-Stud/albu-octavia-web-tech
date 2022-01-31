const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize")

const Spacecraft = sequelize.define("Spacecrafts", {
    SpacecraftID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },

    Name: {
        type: DataTypes.STRING,
        validate: {
            len:[3,255]
        },
        allowNull: false
    },

    MaxSpeed: {
        type: DataTypes.INTEGER,
        validate: {
            min: 1000
        }
    },

    Mass: {
        type: DataTypes.INTEGER,
        validate: {
            min: 2000
        }
    }
    
})

module.exports = Spacecraft;