const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize")

const Astronaut = sequelize.define("Astronauts", {
    AstronautID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },

    SpacecraftID: {
        type: DataTypes.INTEGER,
        references: { model: 'Spacecrafts', key: 'SpacecraftID'},
        allowNull: true
    },

    Name: {
        type: DataTypes.STRING,
        validate: {
            len:[5,255]
        },
        allowNull: false
    },

    Role: {
        type: DataTypes.ENUM("COMMANDER", "PILOT", "CREW")
    }, 
})

module.exports = Astronaut;