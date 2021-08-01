const axios = require("axios");
const { enums } = require("../config/enums");
const { Robo } = require("./Robo");

class AurelioBot {
  constructor() {
    
    this.key = enums.Telegram.key;
    this.baseUrl = enums.Telegram.baseUrl;
    console.log(enums)
  }
  /**
   * Metodo de busca de mensagens na API do Telegram.
   */
  async getMessages(lastId) {
    try{
    const url = `${this.baseUrl}/bot${this.key}/getUpdates?timeout=50&offset=${lastId}`;
    // console.log(url)
    let getMessages = await Robo.request({
        url: url,
        method: "GET",
    })
    // console.log(getMessages.result);
    return getMessages.result;
  }catch(e){
    console.log(e);
  }
  }

  async postMessages() {}

  async postComands() {}
}

module.exports.AurelioBot = AurelioBot;

