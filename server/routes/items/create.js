module.exports = {
  method: "POST",
  path: "/api/items",
  config: {
    auth: { mode: "optional" },
    handler: function(request, reply) {
      let item = new this.models.Item(request.payload);
      item
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
