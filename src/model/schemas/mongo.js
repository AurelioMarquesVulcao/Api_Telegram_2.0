const mongoose = require("mongoose");

const dataBase = new mongoose.Schema({
  creatDate: Date
});

const DataProduct = mongoose.model("Testes", dataBase, "Testes");

module.exports.DataProduct = DataProduct;

