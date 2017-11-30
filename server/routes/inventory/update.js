module.exports = {
  method: "PATCH",
  path: "/api/inventory/{id}/update",
  config: {
    auth: { mode: "optional" },
    handler: function (request, reply) {
      let { id } = request.params;
      console.log(id)
      let { inventoryType, qty, dueDate } = request.payload;
      console.log(request.payload)
      this.models.Inventory
        .filter({ itemId: id })
        .then(res => {
          console.log(res)
          let currentQty = res[0].inventory[inventoryType].onOrder;
          let updateQty = parseInt(qty);

          let newQty = updateQty + currentQty;

          newQty = newQty < 0 ? 0 : newQty;

          this.models.Inventory
            .filter({ itemId: id })
            .update({
              inventory: {
                [inventoryType]: {
                  onOrder: newQty,
                  nextDueDate: dueDate
                }
              }
            })
            .then(res => reply(res))
        })
        .catch(err => {
          console.log(err)
          reply(err)
        });
    }
  }
};
