module.exports = {
  port: process.env.APP_PORT || 3000,
  db: {
    host: process.env.DB_HOST || 'localhost:27017',
    dbName: process.env.DB_NAME || 'app',
    user: process.env.DB_USER || 'root',
    pwd: process.env.DB_PWD || 'root'
  },
  app: {
    middlewares: `${__dirname}/../middlewares`,
    routes: `${__dirname}/../routes`,
  },
  currencies: ['USD', 'EUR', 'GBP', 'RUB'],
  origin: process.env.ORIGIN || 'http://localhost:3000',
  webPath: `${__dirname}/../../public/`
};
