const sleep = require("await-sleep");
const shell = require("shelljs");
const {messagesTelegram} = require('../model/schemas/mongo');

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
      this.getMessages();
      console.log(await this.getMessages());
      // await new messagesTelegram({
      //   message: this.getMessages()[0]
      // }).save()
      messagesTelegram.
      console.log(new Date());
      await sleep(this.timeUpdate);
    }
  }
}
module.exports.Listening = Listening;
