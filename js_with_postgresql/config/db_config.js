const logger = require('../lib/log/logger');

module.exports = {
  development: {
    username: 'root',
    password: 'root',
    database: 'test',
    host: '127.0.0.1',
    dialect: 'postgres',
    logging(msg) {
      logger.system.debug(msg);
    },
  },
};
