module.exports = {
  method: "GET",
  path: "/api/inventory/{id}",
  config: {
    handler: function(request, reply) {
      let { id } = request.params;
      this.models.Inventory
        .get(id)
        .then(res => {
          reply(res);
        })
        .catch(err => {
          console.log(err);
          reply(err);
        });
    }
  }
};
