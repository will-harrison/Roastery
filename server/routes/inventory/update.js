module.exports = {
  method: "PATCH",
  path: "/api/inventory/{id}/update",
  config: {
    auth: { mode: "optional" },
    handler: function (request, reply) {
      let { id } = request.params;
      let { type, orderQty, date } = request.payload;
      this.models.Inventory
        .get(id)
        .update({
          inventory: {
            [type]: {
              onOrder: orderQty,
              nextDueDate: date || null
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
