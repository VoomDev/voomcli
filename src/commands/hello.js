const {Command, flags} = require('@oclif/command')
const chalk = require("chalk")
const figlet = require("figlet")
const clear = require("clear")

class HelloCommand extends Command {
  async run() {
    const {flags} = this.parse(HelloCommand)
    const name = flags.name || 'person'
    clear()
    console.log(chalk.blue(figlet.textSync('VOOM', {
      horizontalLayout: 'full'
    })));
    this.log(`Hello ${name} from VOOM.`)
  }
}

HelloCommand.description = `\nSays hello. Add -n=YOUR NAME to hello you instead of "person"`

HelloCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = HelloCommand
