const express = require('express');

const app = express();
const helmet = require('helmet');
const cors = require('cors');
const logger = require('./lib/log/logger');

app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger.express);

app.use('/health', require('./routes/health'));

app.listen(5000, () => {
  logger.system.info('server started on http://localhost:5000/');
});
