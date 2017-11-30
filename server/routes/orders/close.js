module.exports = {
  method: "PATCH",
  path: "/api/orders/{id}/close",
  config: {
    auth: { mode: "optional" },
    handler: function(request, reply) {
      let { id } = request.params;
      this.models.Order.get(id)
        .update({ status: "closed" })
        .then(res => reply(res))
        .catch(err => {
          console.log(err);
          reply(err);
        });
    }
  }
};
