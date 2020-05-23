// Middleware to define the routes for request to /api/items
const express = require("express");
const db = require("../helpers/db");
const Item = db.Item;

const app = express();

// Get All
app.get("/api/items", async (req, res, next) => {
  const items = await Item.find({});
  try {
    res.send(items);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Create
app.post("/api/items", async (req, res, next) => {
  const item = new Item(req.body);
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete
app.delete("/api/items/:id", async (req, res, next) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);

    if (!item) res.status(404).send("No item found");
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update
app.patch("/api/items/:id", async (req, res, next) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body);
    if (!item) res.status(404).send("No item found");
    await item.save();
    res.send(item);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
