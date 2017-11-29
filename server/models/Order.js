module.exports = (db) => {
  let Order = db.createModel("Order", {
    itemId: db.type.string(),
    inventoryType: db.type.string(),
    orderQty: db.type.number(),
    dueDate: db.type.date(),
    status: db.type.string().default("open")
  });

  return Order;
}