const sleep = require("await-sleep");
// const shell = require("shelljs");
// const { messagesTelegram } = require("../model/schemas/mongo");
const { save } = require("../util/dbMongo");
const { AurelioBot } = require("../lib/bot");

class Listening {
  constructor() {
    this.messageHelp = "";
    this.telegram = new AurelioBot();
    this.timeUpdate = 60000;
  }
  async getMessages() {
    return await this.telegram.getMessages("112638180");
  }

  async postMessages(rec, res) {
    try {
      console.log(rec.body);
      const telegram = new AurelioBot();

      res.send(rec.body);
      console.log(rec.body.text, rec.body.chat_id);
      const sendTelegram = await telegram.sendMessages(
        rec.body
        // rec.body.text,
        // rec.body.chat_id
      );
      console.log(sendTelegram);
      save(sendTelegram)
      save({teste:"teste"})

      // salvar as mensagens no banco de dados apartir daqui.
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * job de updates
   */
  async job() {
    while (true) {
      const messages = await this.getMessages();
      // console.log(messages);
      // console.log(messages[0]);
      console.log(new Date());
      await sleep(this.timeUpdate);
    }
  }

  // /**
  //  * Recebe um Json da mensagem
  //  * @param {Object} message
  //  */
  // async saveMessage(message) {
  //   try {
  //     // colocar teste para validar se pode salvar a mensagem
  //     await new messagesTelegram({
  //       message: message,
  //     }).save();
  //     console.log("Mensagem salva com sucesso");
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
}
module.exports.Listening = Listening;

