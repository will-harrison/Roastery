const thinky = require("thinky");
const db = thinky({ db: "TrendReport" });
let User = require("./User")(db);

module.exports = {
  User
}