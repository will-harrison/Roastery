module.exports = {
  method: "POST",
  path: "/api/inventory",
  config: {
    auth: { mode: "optional" },
    handler: function(request, reply) {
      let inventory = new this.models.Inventory(request.payload);
      inventory
        .save()
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
