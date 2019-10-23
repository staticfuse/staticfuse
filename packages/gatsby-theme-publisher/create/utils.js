const chalk = require('chalk');

module.exports.log = (actionName, hex, logMessage, bg = false) => {
  const style = bg ? 'bgHex' : 'hex';
  console.log(`${chalk[style](hex)(actionName)}: ${logMessage}`);
};
