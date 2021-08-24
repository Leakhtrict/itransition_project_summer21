const express = require("express");
const router = express.Router();
const { Collections } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/", async (req, res) => {
    const listOfCollections = await Collections.findAll();
    res.json(listOfCollections);
});

router.get("/byId/:id", validateToken, async (req, res) => {
    const id = req.params.id;
    const collection = await Collections.findByPk(id);
    const userInfo = req.user.dataValues;
    res.json({ collection: collection, userInfo: userInfo });
});

router.get("/byIdNoAuth/:id", async (req, res) => {
    const id = req.params.id;
    const collection = await Collections.findByPk(id);
    res.json(collection);
});

router.get("/:userId", async (req, res) => {
    const userId = req.params.userId;
    const collections = await Collections.findAll({ where: { UserId: userId } });
    res.json(collections);
});

router.post("/createCollection", async (req, res) => {
    const newCollection = req.body;

    newCollection.numField1_isVisible = newCollection.numField1_Name ? true : false;
    newCollection.numField2_isVisible = newCollection.numField2_Name ? true : false;
    newCollection.numField3_isVisible = newCollection.numField3_Name ? true : false;
    newCollection.stringField1_isVisible = newCollection.stringField1_Name ? true : false;
    newCollection.stringField2_isVisible = newCollection.stringField2_Name ? true : false;
    newCollection.stringField3_isVisible = newCollection.stringField3_Name ? true : false;
    newCollection.textField1_isVisible = newCollection.textField1_Name ? true : false;
    newCollection.textField2_isVisible = newCollection.textField2_Name ? true : false;
    newCollection.textField3_isVisible = newCollection.textField3_Name ? true : false;
    newCollection.dateField1_isVisible = newCollection.dateField1_Name ? true : false;
    newCollection.dateField2_isVisible = newCollection.dateField2_Name ? true : false;
    newCollection.dateField3_isVisible = newCollection.dateField3_Name ? true : false;
    newCollection.numberOfItems = 0;

    await Collections.create(newCollection);
    res.json("Created collection successfully!");
});

router.post("/:id/editCollection", async (req, res) => {
    const id = req.params.id;
    const newCollection = req.body;

    console.log(newCollection);

    newCollection.numField1_isVisible = newCollection.numField1_Name ? true : false;
    newCollection.numField2_isVisible = newCollection.numField2_Name ? true : false;
    newCollection.numField3_isVisible = newCollection.numField3_Name ? true : false;
    newCollection.stringField1_isVisible = newCollection.stringField1_Name ? true : false;
    newCollection.stringField2_isVisible = newCollection.stringField2_Name ? true : false;
    newCollection.stringField3_isVisible = newCollection.stringField3_Name ? true : false;
    newCollection.textField1_isVisible = newCollection.textField1_Name ? true : false;
    newCollection.textField2_isVisible = newCollection.textField2_Name ? true : false;
    newCollection.textField3_isVisible = newCollection.textField3_Name ? true : false;
    newCollection.dateField1_isVisible = newCollection.dateField1_Name ? true : false;
    newCollection.dateField2_isVisible = newCollection.dateField2_Name ? true : false;
    newCollection.dateField3_isVisible = newCollection.dateField3_Name ? true : false;

    await Collections.update(newCollection, { where: { id: id } });
    res.json("edited collection successfully!");
});

router.delete("/:id", validateToken, async (req, res) => {
    const id = req.params.id;
    await Collections.destroy({ where: { id: id } });
    res.json("collection deleted successfully");
});

module.exports = router;