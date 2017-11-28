module.exports = {
  method: "GET",
  path: "/api/inventory",
  config: {
    auth: { mode: "optional" },
    handler: function (request, reply) {
      this.models.Inventory
        .filter({})
        .getJoin()
        .then(result => reply(result))
        .catch(err => reply(err));
    }
  }
};
