exports.init = app => app.use(async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    switch (true) {
      case e.status:
        ctx.body = {
          error: e.message
        };
        ctx.status = e.status;
        return;
      case e.name === 'ValidationError':
        const errors = {};

        Object.keys(e.errors).forEach(key => {
          errors[key] = e.errors[key].message;
        })

        ctx.body = {
          errors
        };
        ctx.status = 400;
        return;
      default:
        ctx.body = {
          error: 'Something went wrong'
        };
        ctx.status = 500;
    }
  }
});
