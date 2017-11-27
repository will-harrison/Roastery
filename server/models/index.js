const thinky = require("thinky");
const db = thinky({ db: "Roastery" });
let User = require("./User")(db);
let Item = require("./Item")(db);
let Inventory = require("./Inventory")(db);

Inventory.hasAndBelongsToMany(Item, "items", "itemId", "id");
Item.hasAndBelongsToMany(Inventory, "inventory", "id", "itemId");

module.exports = {
  User,
  Item,
  Inventory
};
