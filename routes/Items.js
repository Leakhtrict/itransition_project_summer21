const express = require("express");
const router = express.Router();
const { Items, Likes, Collections } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/", async (req, res) => {
    const listOfItems = await Items.findAll({ include: [Likes] });
    res.json(listOfItems);
});

router.get("/byId/:id", async (req, res) => {
    const id = req.params.id;
    const item = await Items.findByPk(id, { include: [Likes] });
    res.json(item);
});

router.get("/:collectionId", async (req, res) => {
    const collectionId = req.params.collectionId;
    const items = await Items.findAll(
        { 
            include: [Likes],
            where: { CollectionId: collectionId }
        }
    );
    res.json(items);
});

router.post("/createItem/:collectionId", async (req, res) => {
    const collectionId = req.params.collectionId;
    const newItem = req.body;
    const collectionUpd = await Collections.findByPk(collectionId);
    newItem.CollectionId = collectionId;
    await Items.create(newItem);
    await Collections.update({ numberOfItems: collectionUpd.numberOfItems + 1 }, { where: { id: collectionId } });
    res.json("Created item successfully!");
});

router.post("/editItem/:itemId", async (req, res) => {
    const itemId = req.params.itemId;
    const editedItem = req.body;
    await Items.update(editedItem, { where: { id: itemId } });
    res.json("edited item successfully!");
});

router.delete("/:id", validateToken, async (req, res) => {
    const id = req.params.id;
    const itemToDelete = await Items.findByPk(id);
    const collectionUpd = await Collections.findByPk(itemToDelete.CollectionId);
    await Items.destroy({ where: { id: id } });
    await Collections.update({ numberOfItems: collectionUpd.numberOfItems - 1 }, { where: { id: collectionUpd.id } });
    res.json("item deleted successfully");
});

module.exports = router;