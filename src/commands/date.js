const {Command, flags} = require('@oclif/command')
const chalk = require("chalk")
const figlet = require("figlet")
const clear = require("clear")

class DateCommand extends Command {
  async run() {
    const {flags} = this.parse(DateCommand)
    clear()
    console.log(chalk.yellow(figlet.textSync('DATE:', {
      horizontalLayout: 'full'
    })));
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    console.log(chalk.cyan(figlet.textSync(date + "-" + month + "-" + year, {
      horizontalLayout: 'full'
    })));
    }
  }

DateCommand.description = `\nShows current date.`

DateCommand.flags = {}

module.exports = DateCommand
