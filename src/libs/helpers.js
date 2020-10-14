const fs = require('fs');
const path = require('path');
const config = require('config');

function initMiddlewares(app) {
  const dir = path.resolve(config.get('app.middlewares'));
  const handlers = fs.readdirSync(dir).sort();
  handlers.forEach(handler => {
    if (!handler.match(/^[0-9]+.*/)) {
      return false;
    }
    require(`${dir}/${handler}`).init(app);
  });
}

function initRouters(app) {
  const dir = path.resolve(config.get('app.routes'));
  const routerFiles = fs.readdirSync(dir).sort();
  routerFiles
    .map(routerFile => require(`${dir}/${routerFile}`))
    .forEach(router => {
      app
        .use(router.routes())
        .use(router.allowedMethods());
    })
}

module.exports = {
  initMiddlewares,
  initRouters
}
