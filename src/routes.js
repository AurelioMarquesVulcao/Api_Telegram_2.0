const express = require("express");
const routes = express.Router();

const { Listening } = require("./messages");

const telegram = new Listening()


// const {CosultBasic} = require('./crud/index');

routes.get("/", function (req, res) {
  return res.send({ message: "Você esta no APP " });
});
// routes.post("/", function (req, res) {
//   return res.send({"message": "Você esta no APP "});
// });

// routes.get("/base", CosultBasic.get);

routes.post("/post", telegram.postMessages);

// routes.put("/base", CosultBasic.put);

// routes.delete("/base", CosultBasic.delete);

// routes.get("/test", Currencyquotation.getTest);

// routes.put("/update", UpdateCoin.add);

// routes.delete("/delete", UpdateCoin.delete);

// routes.get("/cpu", CPU.cpuStatus);

module.exports = routes;
