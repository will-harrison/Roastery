module.exports = {
  method: "GET",
  path: "/api/orders",
  config: {
    auth: { mode: "optional" },
    handler: function (request, reply) {
      this.models.Order
        .filter({})
        .then(res => reply(res))
        .catch(err => reply(err))
    }
  }
}