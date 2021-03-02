const path = require('path');

const APP_ROOT = path.join(__dirname, '../');

const log4js = require('log4js');

log4js.configure({
  appenders: {
    access: {
      category: 'access',
      type: 'dateFile',
      filename: path.join(APP_ROOT, '../log/access/access.log'),
      pattern: '-yyyy-MM-dd',
      backups: 10,
    },
    system: {
      type: 'dateFile',
      filename: path.join(APP_ROOT, '../log/system/system.log'),
      pattern: '-yyyy-MM-dd',
      backups: 10,
    },
    error: {
      type: 'dateFile',
      filename: path.join(APP_ROOT, '../log/error/error.log'),
      pattern: '-yyyy-MM-dd',
      backups: 10,
    },
    out: {
      type: 'stdout',
    },
  },
  categories: {
    default: {
      appenders: [
        'out',
      ],
      level: 'debug',
    },
    access: {
      appenders: [
        'access',
      ],
      level: 'debug',
    },
    system: {
      appenders: [
        'system',
        'out',
      ],
      level: 'debug',
    },
    error: {
      appenders: [
        'error',
        'out',
      ],
      level: 'debug',
    },
  },
});

module.exports = {
  access: log4js.getLogger('access'),
  system: log4js.getLogger('system'),
  error: log4js.getLogger('error'),
  express: log4js.connectLogger(log4js.getLogger('access'), { level: log4js.levels.INFO }),
};
