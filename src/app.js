require('dotenv').config();
process.env.NODE_CONFIG_DIR = __dirname + '/config/';

const Koa = require('koa')
const { initMiddlewares, initRouters } = require('./libs/helpers');
const app = new Koa();
require('./db/index');

initMiddlewares(app);
initRouters(app);

module.exports = app;
