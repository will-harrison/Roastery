module.exports = (db) => {
  let Inventory = db.createModel("Inventory", {
    itemId: db.type.string(),
    inventory: {
      greenBulk: {
        type: db.type.string().default("Green Bulk"),
        minValue: db.type.number().default(50),
        unitOfMeasure: db.type.string().default("lbs"),
        onHand: db.type.number(),
        onOrder: db.type.number(),
        nextDueDate: db.type.date()
      },
      roastedBulk: {
        type: db.type.string().default("Roasted Bulk"),
        minValue: db.type.number().default(5),
        unitOfMeasure: db.type.string().default("lbs"),
        onHand: db.type.number(),
        onOrder: db.type.number(),
        nextDueDate: db.type.date()
      },
      bagged10: {
        type: db.type.string().default("10 lbs Bagged"),
        minValue: db.type.number().default(10),
        unitOfMeasure: db.type.number().default("lbs"),
        onHand: db.type.number(),
        onOrder: db.type.number(),
        nextDueDate: db.type.date()
      },
      bagged5: {
        type: db.type.string().default("5 lbs Bagged"),
        minValue: db.type.number().default(5),
        unitOfMeasure: db.type.number().default("lbs"),
        onHand: db.type.number(),
        onOrder: db.type.number(),
        nextDueDate: db.type.date()
      },
      bagged1: {
        type: db.type.string().default("1 lbs Bagged"),
        minValue: db.type.number().default(1),
        unitOfMeasure: db.type.number().default("lbs"),
        onHand: db.type.number(),
        onOrder: db.type.number(),
        nextDueDate: db.type.date()
      },
      bagged12oz: {
        type: db.type.string().default("12 oz Bagged"),
        minValue: db.type.number().default(.75),
        unitOfMeasure: db.type.number().default("oz"),
        onHand: db.type.number(),
        onOrder: db.type.number(),
        nextDueDate: db.type.date()
      }
    }
  });

  return Inventory;
}