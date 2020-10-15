import Vue from "vue";
import Vuex from "vuex";
import donationForm from './modules/donationForm/donationForm.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    donationForm
  }
});
