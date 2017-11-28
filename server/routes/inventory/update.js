module.exports = {
  method: "PATCH",
  path: "/api/inventory/{id}/update",
  config: {
    auth: { mode: "optional" },
    handler: function(request, reply) {
      let { id } = request.params;
      this.models.Inventory.get(id)
        .then(res => reply(res))
        .catch(err => reply(err));
    }
  }
};
