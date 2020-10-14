/* global describe, it, context, before, after */

const axios = require('axios');
const assert = require('assert');
const app = require('../src/app');
const Donation = require('../src/db/models/donation');
const _ = require('lodash');

let server;
const serverPort = 3333;
const serverUrl = 'http://localhost';

function getUrl(path) {
  return `${serverUrl}:${serverPort}/${path}`;
}

describe('Make a donation', () => {
  let correctDonation = {
    amount: 40,
    currency: "USD"
  };

  let incorrectDonations = [
    {
      amount: 0,
      currency: "ZAR"
    },
    {
      amount: "yes",
      currency: 10
    }
  ];

  before(async function () {
    server = app.listen(serverPort);
  });

  after(async () => {
    await server.close();
  });

  beforeEach(async () => {
    await Donation.deleteMany({});
  });

  describe('POST /donate', async () => {
    it('should make a correct donation', async () => {
      const result = await axios.post(getUrl('donate'), correctDonation);
      assert.strictEqual(result.status, 200);
      assert.deepStrictEqual(result.data, {ok: true});
      const donation = await Donation.findOne();
      assert.deepStrictEqual(_.pick(donation, ['amount', 'currency']), correctDonation);
    });

    it('should get amount validation error', async () => {
      try {
        await axios.post(getUrl('donate'), incorrectDonations[0]);
      } catch (e) {
        assert.strictEqual(e.response.status, 400);
        assert.strictEqual(typeof e.response.data.errors, 'object');
        assert.strictEqual(typeof e.response.data.errors.amount, 'string');
      }
    });

    it('should get currency validation error', async () => {
      try {
        await axios.post(getUrl('donate'), incorrectDonations[1]);
      } catch (e) {
        assert.strictEqual(e.response.status, 400);
        assert.strictEqual(typeof e.response.data.errors, 'object');
        assert.strictEqual(typeof e.response.data.errors.currency, 'string');
      }
    });
  });

});
