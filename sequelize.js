const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('postgres://jaqesgzvaiokew:4f5be014f8c0b12dbf2ddc0478d5d5512adaf112d00592006691cc722664485f@ec2-54-220-195-236.eu-west-1.compute.amazonaws.com:5432/d9ddcasjj3r2k0',
    {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        }
    })

sequelize.sync().then(function () {}).then(
    console.log("Synced.")
);
module.exports = sequelize;