import {
  CHANGE_AMOUNT,
  CHANGE_CURRENCY,
  CHANGE_SUGGESTION
} from "@/store/modules/donationForm/mutations.type";
import config from '@/config';
import { DONATE } from "@/store/modules/donationForm/actions.type";
import api from '@/services/api.service';

const currencies = config.currencies;

const state = {
  presets: config.presets,
  suggestion: 0, // changed this to index of presets
  amount: 40,
  currency: currencies.USD,
  currenciesList: Object.values(currencies),
  currencyCodes: Object.keys(currencies),
};

const mutations = {
  [CHANGE_AMOUNT](state, amount) {
    state.amount = +amount;
    const convertedPresets = convertPresets(state.presets);
    state.suggestion = convertedPresets.indexOf(state.amount);
  },
  [CHANGE_CURRENCY](state, currency) {
    const newCurrency = currencies[currency];
    const exchangeRate = newCurrency.rate / state.currency.rate;
    if (state.suggestion === -1) {
      state.amount = Math.ceil(state.amount * exchangeRate);
    } else {
      state.amount = roundMultiple(state.presets[state.suggestion] * newCurrency.rate);
    }
    state.currency = newCurrency;
  },
  [CHANGE_SUGGESTION](state, suggestion) {
    state.suggestion = suggestion.idx;
    state.amount = +suggestion.value;
  }
};

const getters = {
  convertedPresets: (state) => {
    return state.presets.map((value, idx) => {
      return {
        idx,
        value: roundMultiple(value * state.currency.rate),
        selected: idx === state.suggestion
      };
    })
  }
}

const actions = {
  [DONATE](context) {
    return api.donate(context.state.amount, context.state.currency.code);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

function roundMultiple(num) {
  let divider;
  switch (true) {
    case num < 100:
      divider = 20;
      break;
    case num >= 100 && num < 200:
      divider = 50;
      break;
    case num >= 200 && num < 1000:
      divider = 100;
      break;
    case num >= 1000 && num < 10000:
      divider = 500;
      break;
    case num >= 10000 && num < 100000:
      divider = 10000;
      break;
    default:
      divider = 50000;
  }
  return (Math.round(num / divider) * divider);
}

function convertPresets(presets) {
  return presets.map(value => {
    return roundMultiple(value * state.currency.rate)
  });
}
