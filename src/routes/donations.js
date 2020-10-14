const _ = require('lodash');
const Router = require('koa-router');
const router = new Router();
const Donation = require('../db/models/donation');

router
  .post('/donate', async (ctx) => {
    const donation = new Donation(_.pick(ctx.request.body, ['amount', 'currency']));
    await donation.save();
    ctx.body = {
      ok: true
    };
  })

module.exports = router;
