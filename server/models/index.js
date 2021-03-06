const thinky = require("thinky");
const db = thinky({ db: "Roastery" });
let User = require("./User")(db);
let Item = require("./Item")(db);
let Inventory = require("./Inventory")(db);
let Order = require("./Order")(db);

Inventory.hasOne(Item, "item", "itemId", "id");
Item.hasOne(Inventory, "inventory", "id", "itemId");
Item.hasMany(Order, "orders", "id", "itemId");
Order.hasOne(Item, "item", "itemId", "id");

module.exports = {
  User,
  Item,
  Inventory,
  Order
};
