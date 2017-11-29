module.exports = {
  method: "PATCH",
  path: "/api/inventory/{id}/update",
  config: {
    auth: { mode: "optional" },
    handler: function (request, reply) {
      let { id } = request.params;
      let { inventoryType, qty, dueDate } = request.payload;
      console.log(request.payload)
      this.models.Inventory
        .get(id)
        .update({
          inventory: {
            [inventoryType]: {
              onOrder: parseInt(qty),
              nextDueDate: dueDate || null
            }
          }
        })
        .then(res => reply(res))
        .catch(err => {
          console.log(err)
          reply(err)
        });
    }
  }
};
