const axios = require("axios");
const { enums } = require("../config/enums");
const { Robo } = require("./robo");

class AurelioBot {
  constructor() {
    this.key = enums.Telegram.key;
    this.baseUrl = enums.Telegram.baseUrl;
    console.log(enums);
  }
  /**
   * Metodo de busca de mensagens na API do Telegram.
   */
  async getMessages(lastId) {
    try {
      const url = `${this.baseUrl}/bot${this.key}/getUpdates?timeout=50&offset=${lastId}`;
      // console.log(url)
      let getMessages = await Robo.request({
        url: url,
        method: "GET",
      });
      // console.log(getMessages.result);
      return getMessages.result;
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * Metodo de envio de mensagens na API do Telegram.
   */
  async sendMessages({ text, chat_id }) {
    // text, chat_id) {
    try {
      const url = `https://api.telegram.org/bot${this.key}/sendMessage`;
      let send = await Robo.request({
        url: url,
        method: "POST",
        data: {
          chat_id: chat_id,
          text: text,
        },
      });
      return send.result;
    } catch (e) {
      // console.log(e);
    }
  }

  async postComands() {}
}

module.exports.AurelioBot = AurelioBot;
