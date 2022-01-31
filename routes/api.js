const SpacecraftDB = require("../models/Spacecraft")
const AstronautDB = require("../models/Astronaut")
var express = require("express");
const { Op } = require("sequelize");
const { route } = require("../app");
var path = require('path');
var router = express.Router();

router.get("/spacecrafts", async (req, res, next) => {
    try {
        const spacecrafts = await SpacecraftDB.findAll({
            order: [
                ['SpacecraftID', 'DESC']
            ]
        });

        res.status(200).json(spacecrafts);
    } catch (err) {
        console.log(err)
        next(err);
    }
});

router.get("/astronauts", async (req, res, next) => {
    try {
        const astronauts = await AstronautDB.findAll();
        res.status(200).json(astronauts);
    } catch (err) {
        next(err);
    }
});


router.get("/astronauts/:id", async (req, res, next) => {
    try {
        const astronauts = await AstronautDB.findByPk(req.params.id);
        res.status(200).json(astronauts);
    } catch (err) {
        next(err);
    }
});

router.post("/spacecrafts", async (req, res, next) => {
    try {
        await SpacecraftDB.create(req.body);
        res.status(201).json({ message: "Spacecraft Created!" });
    } catch (err) {
        next(err);
    }
});

router.post("/astronauts", async (req, res, next) => {
    try {
        await AstronautDB.create(req.body);
        res.status(201).json({ message: "Astronaut Created!" });
    } catch (err) {
        next(err);
    }
});

router.get("/spacecrafts/:id/astronauts", async (req, res, next) => {
    try {
        const astronauts = await AstronautDB.findAll({ where: { SpacecraftID: `${req.params.id}` } })
        if (astronauts) {
            return res.status(200).json(astronauts);
        } else {
            return res.status(404).json({ message: "Not found" })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error })
    }
})

router.put("/spacecrafts/:id", async (req, res, next) => {
    try {
        const { Name, MaxSpeed, Mass } = req.body;
        await SpacecraftDB.update({
            Name: Name,
            MaxSpeed: MaxSpeed,
            Mass: Mass
        }, {
            where: {
                SpacecraftID: `${req.params.id}`
            }
        })
        return res.status(200).json({ message: "Spacecraft edited" });
    } catch (err) {
        console.log(err)
        next(err);
    }
})

router.delete("/spacecrafts/:id", async (req, res, next) => {
    try {
        await SpacecraftDB.destroy({ where: { SpacecraftID: `${req.params.id}` } })
        return res.status(200).json({ message: "Spacecraft deleted" });
    } catch (err) {
        console.log(err)
        next(err)
    }
})

router.put("/spacecrafts/:id/astronauts/:astronautID", async (req, res, next) => {
    try {
        const { SpacecraftID, Name, Role } = req.body;
        const spacecraft = await SpacecraftDB.findByPk(req.params.id);
        if (spacecraft) {
            const astronaut = await AstronautDB.findByPk(req.params.astronautID, { where: { AstronautID: `${spacecraft.AstronautID}` } })
            if (astronaut) {
                await AstronautDB.update({
                    SpacecraftID: SpacecraftID,
                    Name: Name,
                    Role: Role,
                }, {
                    where: {
                        AstronautID: astronaut.AstronautID
                    }
                })
            }
            return res.status(200).json({ message: "Astronaut edited" })
        }
    } catch (err) {
        console.log(err);
        next(err)
    }
})

router.delete("/spacecrafts/:id/astronauts/:astronautID", async (req, res, next) => {
    try {
        const spacecraft = await SpacecraftDB.findByPk(req.params.id);
        if (spacecraft) {
            const astronaut = await AstronautDB.findByPk(req.params.astronautID, { where: { SpacecraftID: `${spacecraft.SpacecraftID}` } })
            if (astronaut) {
                await AstronautDB.destroy({ where: { AstronautID: astronaut.AstronautID } })
            }
            return res.status(200).json({ message: "Astronaut deleted" })
        }
    } catch (err) {
        console.log(err)
        next(err)
    }
})

router.post("/spacecrafts/:id/astronauts", async (req, res, next) => {
    try {
        const spacecraft = await SpacecraftDB.findByPk(req.params.id);
        if (spacecraft) {
            const astronaut = await AstronautDB.create(req.body)
            if (astronaut) {
                return res.status(201).json({ message: "Astronaut added" })
            }
        }
    } catch (err) {
        console.log(err)
        next(err)
    }
})

router.get("/spacecrafts/:maxSpeed/:mass", async (req, res, next) => {
    try {
        const spacecrafts = await SpacecraftDB.findAll({
            where: {
                MaxSpeed: req.params.maxSpeed,
                Mass: req.params.mass
            }
        })
        if (spacecrafts) {
            return res.status(200).json(spacecrafts);
        }
    } catch (err) {
        console.log(err)
        next(err)
    }
})

module.exports = router;