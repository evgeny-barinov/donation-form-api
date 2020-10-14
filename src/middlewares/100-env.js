exports.init = app => app.use(async (ctx, next) => {
  ctx.ENV = process.env.NODE_ENV;
  await next();
});
