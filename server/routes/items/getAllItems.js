module.exports = {
  method: "GET",
  path: "/api/items",
  config: {
    auth: { mode: "optional" },
    handler: function(request, reply) {
      this.models.Item
        .filter({})
        .then(result => reply(result))
        .catch(err => reply(err));
    }
  }
};
