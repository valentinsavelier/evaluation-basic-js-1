const chalk = require('chalk')

const exercise = 'check'

const program = require(`./src/${exercise}`)

console.log(chalk.yellow(`\n${program.title} is running\n`))

const output = program.run()

console.log(chalk.green(`\n${program.title} finished with value ${chalk.cyan.bold(output)}\n`))
