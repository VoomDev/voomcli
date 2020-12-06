const {Command, flags} = require('@oclif/command')
const chalk = require("chalk")
const figlet = require("figlet")
const clear = require("clear")

class TimeCommand extends Command {
  async run() {
    const {flags} = this.parse(TimeCommand)
    clear()
    console.log(chalk.red(figlet.textSync('TIME:', {
      horizontalLayout: 'full'
    })));
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    console.log(chalk.cyan(figlet.textSync(hours + ":" + minutes + ":" + seconds, {
      horizontalLayout: 'full'
    })));
  }
}

TimeCommand.description = `\nShows the current time`

TimeCommand.flags = {}

module.exports = TimeCommand
