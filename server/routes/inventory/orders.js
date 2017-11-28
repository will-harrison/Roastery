module.exports = {
  method: "GET",
  path: "/api/inventory/orders",
  config: {
    auth: { mode: "optional" },
    handler: function(request, reply) {
      let InventoryModel = this.models.Inventory;
      InventoryModel.filter(function(model) {
        return model("inventory")("greenBulk")("onOrder").gt(0);
      })
        //.getJoin()
        .then(result => reply(result))
        .catch(err => reply(err));
    }
  }
};
