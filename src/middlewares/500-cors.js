const cors = require('koa2-cors');
const config = require('config');

exports.init = app => app
  .use(cors({
    origin: config.get('origin'),
    credentials: true,
    allowMethods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowHeaders: ['Origin', 'Content-Type', 'Accept', 'Authorization']
  }));
