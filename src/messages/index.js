const sleep = require("await-sleep");
// const shell = require("shelljs");
const { messagesTelegram } = require("../model/schemas/mongo");

const { AurelioBot } = require("../lib/bot");

class Listening {
  constructor() {
    this.messageHelp = "";
    this.telegram = new AurelioBot();
    this.timeUpdate = 3000;
  }
  async getMessages() {
    return await this.telegram.getMessages("112638177");
  }
  /**
   * job de updates
   */
  async job() {
    while (true) {
      const messages = await this.getMessages();
      console.log(messages);
      console.log(messages[0]);



      console.log(new Date());
      await sleep(this.timeUpdate);
    }
  }

  /**
   * Recebe um Json da mensagem
   * @param {Object} message
   */
  async saveMessage(message) {
    try {
      // colocar teste para validar se pode salvar a mensagem
      await new messagesTelegram({
        message: message,
      }).save();
      console.log("Mensagem salva com sucesso");
    } catch (e) {
      console.log(e);
    }
  }
}
module.exports.Listening = Listening;
