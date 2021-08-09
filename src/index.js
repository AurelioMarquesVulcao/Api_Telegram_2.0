const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { Listening } = require("./messages");
const { DataProduct } = require("./model/schemas/mongo");

const { enums } = require("./config/enums");

class App {
  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();

    this.express.listen(enums.ApiPort, () =>
      console.log(`Sua API REST está funcionando na porta ${enums.ApiPort} `)
    );
    this.bot();
  }

  database() {
    try {
      console.log(enums.Mongo.connString);
      mongoose.connect(enums.Mongo.connString, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Conectado ao mongo");
      new DataProduct({
        creatDate: new Date(),
      }).save();
      // let teste =DataProduct.findOne({})
      // console.log(teste);
    } catch (e) {
      console.log(e);
    }
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
  }

  routes() {
    this.express.use(require("./routes"));
  }

  bot() {
    new Listening().job();
  }
}
module.exports = new App().express;
