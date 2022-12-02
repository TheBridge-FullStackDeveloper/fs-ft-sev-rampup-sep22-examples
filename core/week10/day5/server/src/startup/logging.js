const winston = require('winston')
require('winston-mongodb');

module.exports = function () {
    winston.add(new winston.transports.File({filename: 'logs/errors.log', level: "error"}))
    winston.add(new winston.transports.Console({format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )}))
    
    winston.exceptions.handle(
        new winston.transports.File({ filename: 'logs/exceptions.log', exitOnError: true })
    );
    
    winston.add(new winston.transports.MongoDB({db: process.env.MONGO_URI, collection : 'logs',
    level : 'error'}));
}