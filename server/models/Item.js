module.exports = (db) => {
  let Item = db.createModel("Item", {
    name: db.type.string(),
    description: db.type.string(),
  })

  return Item;
}