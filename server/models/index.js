const thinky = require("thinky");
const db = thinky({ db: "Roastery" });
let User = require("./User")(db);
let Item = require("./Item")(db);
let Inventory = require("./Inventory")(db);

Inventory.hasOne(Item, "item", "itemId", "id");
Item.hasOne(Inventory, "inventory", "id", "itemId");

module.exports = {
  User,
  Item,
  Inventory
};
