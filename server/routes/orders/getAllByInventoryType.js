module.exports = {
  method: "POST",
  path: "/api/orders",
  config: {
    auth: { mode: "optional" },
    handler: function (request, reply) {
      let inventoryType = request.payload;
      this.models.Order
        .orderBy({ index: "dueDate" })
        .filter({ status: "open" })
        .filter({ inventoryType } || {})
        .getJoin({ item: true })
        .then(res => {
          reply(res)
        })
        .catch(err => {
          console.log(err)
          reply(err)
        })
    }
  }
}