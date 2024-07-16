const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const customFormat = printf(({ message, level, timestamp })=>{
    return `${timestamp} : ${level} : ${message}`;
});

const logger = createLogger({
    format: combine(
        timestamp({format: 'YYYY-MM-DD'}),
        customFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({filename: 'combine.log'})
    ],
});
module.exports = logger;