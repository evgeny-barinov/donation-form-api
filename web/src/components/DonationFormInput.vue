<template>
  <b-input-group>
    <b-input-group-prepend is-text><b>{{ currencySymbol }}</b></b-input-group-prepend>
    <b-form-input v-int-only v-model="amount" type="number" min="1" step="1"></b-form-input>
    <template v-slot:append>
      <b-form-select :options="currenciesList" v-model="currency"></b-form-select>
    </template>
  </b-input-group>
</template>

<script>
import { CHANGE_AMOUNT, CHANGE_CURRENCY } from "@/store/modules/donationForm/mutations.type";

export default {
  name: "DonationFormInput",
  computed: {
    currenciesList: function () {
      return this.$store.state.donationForm.currenciesList.map(function (currency) {
        return {
          text: currency.code,
          value: currency.code
        }
      });
    },
    currencySymbol: function() {
      return this.$store.state.donationForm.currency.symbol;
    },
    currency: {
      get() {
        return this.$store.state.donationForm.currency.code;
      },

      set(value) {
        this.$store.commit(`donationForm/${CHANGE_CURRENCY}`, value);
      }
    },
    amount: {
      get() {
        return this.$store.state.donationForm.amount;
      },

      set(value) {
        this.$store.commit(`donationForm/${CHANGE_AMOUNT}`, value);
      }
    }
  }
}
</script>

<style scoped>

</style>
