const thinky = require("thinky");
const db = thinky({ db: "Roastery" });
let inventory = require("./inventory");
let item = require("./item");
let models = require("../models");

models.Item
  .insert(item)
  .run()
  .then(() =>
    models.Inventory
      .insert(inventory)
      .run()
      .then(() => {
        db.r.getPoolMaster().drain();
        process.exit();
      })
  );
