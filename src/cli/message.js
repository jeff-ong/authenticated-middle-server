const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');

function pass(message) {
  clear();
  console.log(chalk.green(figlet.textSync(message, { horizontalLayout: 'full' })));
}

function warning(message) {
  clear();
  console.log(chalk.yellow(message));
}

module.exports = { pass, warning };
