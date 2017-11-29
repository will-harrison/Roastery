module.exports = {
  method: "POST",
  path: "/api/orders",
  config: {
    auth: { mode: "optional" },
    handler: function (request, reply) {
      let order = new this.models.Order(request.payload);
      order
        .save()
        .then(res => {
          reply(res);
        })
        .catch(err => reply(err))
    }
  }
}