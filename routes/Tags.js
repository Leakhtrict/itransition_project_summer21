const express = require("express");
const router = express.Router();
const { Tags } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/", async (req, res) => {
    const listOfTags = await Tags.findAll();
    res.json(listOfTags);
});

router.post("/addTags", (req, res) => {
    const selectedTags = req.body;
    console.log(selectedTags);
    selectedTags.map( async (value, key) => {
        if(value.__isNew__){
            await Tags.create({ tagName: value.label})
        }
    });
});

module.exports = router;