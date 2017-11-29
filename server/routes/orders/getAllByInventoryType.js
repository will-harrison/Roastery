module.exports = {
  method: "POST",
  path: "/api/orders",
  config: {
    auth: { mode: "optional" },
    handler: function (request, reply) {
      let { filters } = request.payload;
      this.models.Order
        .filter(filters)
        .then(res => reply(res))
        .catch(err => reply(err))
    }
  }
}