const mongo = require("mongoose");
const Schema = mongo.Schema;

const Employé = new Schema({
  fullname: String,
  rank: Number,
  salary: Number,
});

module.exports = mongo.model("employé", Employé);
