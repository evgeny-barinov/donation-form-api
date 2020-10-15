<template>
  <div class="col-4 mb-1 p-1">
    <b-button @click="changeSuggestion" :variant="variant" class="btn-block">{{ suggestion.value | moneyFormat(currency.code) }}</b-button>
  </div>
</template>

<script>
import { CHANGE_SUGGESTION } from "@/store/modules/donationForm/mutations.type";

export default {
  name: "DonationFormSuggestion",
  props: ['suggestion', 'currency'],
  methods: {
    changeSuggestion: function () {
      this.$store.commit(`donationForm/${CHANGE_SUGGESTION}`, this.suggestion);
    }
  },
  computed: {
    variant: function() {
      return this.suggestion.selected ? 'primary' : 'outline-primary';
    }
  }
}
</script>

<style scoped>

</style>
