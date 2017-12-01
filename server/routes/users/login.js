module.exports = {
  method: "POST",
  path: "/api/users/login",
  config: {
    auth: { mode: "optional" },
    handler: function(request, reply) {
      let { email, password } = request.payload;
      this.models.User.filter({ email: email })
        .then(users => {
          let [user] = users;
          if (!user) throw "Email and password combination are incorrect.";
          return user.comparePassword(password);
        })
        .then(user => {
          if (!user) throw "Email and password combination are incorrect.";
          delete user.password;
          console.log(user.generateJWT());
          return user.generateJWT();
        })
        .then(user => reply({ token: user }))
        .catch(err => err);
    }
  }
};
