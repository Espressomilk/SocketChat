var winston = require('winston');
require('winston-daily-rotate-file');
var path = require('path');
var fs = require('fs');
var pathUtils = require('../other/pathUtils');
var getAbsolutePath = require('../other/pathUtils').getAbsolutePath;
var logPath = getAbsolutePath('logs/');
// console.log(logPath);
if (!fs.existsSync(logPath)) {
    fs.mkdirSync('logs/', 0755);
    // console.log("not exists");
}

var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({colorize: true}),
        new (winston.transports.DailyRotateFile)({
            name: 'file',
            datePattern: '.yyyy-MM-dd.log',
            json: false,
            filename: path.join(logPath, 'log')
        })
    ]
});
module.exports = logger;