
const cmd = require('node-cmd');

var twoDigitRegExp = /\d{5}/;

const {data} = cmd.runSync('netstat -ano | findstr /FI :4300"');
let dataMatch = data.match(twoDigitRegExp);
console.log (dataMatch[0])
cmd.runSync(`Taskkill /PID ${dataMatch[0]} /F `);


