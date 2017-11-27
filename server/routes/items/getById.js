module.exports = {
  method: "GET",
  path: "/api/items/{id}",
  config: {
    auth: { mode: "optional" },
    handler: function(request, reply) {
      let { id } = request.params;
      this.models.Item
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
