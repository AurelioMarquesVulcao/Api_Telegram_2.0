// const mongoose = require("mongoose");
const { messagesTelegram } = require("../model/schemas/mongo");

module.exports.save = (data) => {
  // console.log(data);
  new messagesTelegram({ message: data }).save();
};
