<template>
    <b-card>
      <div class="row" v-if="!completed">
        <div class="col-12">
          <div class="row p-1">
            <donation-form-suggestion
                v-for="suggestion of suggestions"
                :key="suggestion.value"
                :suggestion="suggestion"
                :currency="currency">
            </donation-form-suggestion>
          </div>
          <div class="row p-1">
            <div class="col">
              <donation-form-input></donation-form-input>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-12">
              <b-button @click="donate" variant="primary" class="btn-block">Donate</b-button>
            </div>
          </div>
        </div>
      </div>
      <div class="row" v-if="completed">
        <div class="col-12">
          <b-alert v-if="succeed" variant="success" show>Thank you for your donation!</b-alert>
          <b-alert v-if="failed" variant="danger" show>Something went wrong!</b-alert>
          <b-button @click="back" variant="primary-outline" class="btn-block">Donate More</b-button>
        </div>
      </div>
    </b-card>
</template>

<script>
import DonationFormSuggestion from "@/components/DonationFormSuggestion";
import DonationFormInput from "@/components/DonationFormInput";
import { DONATE } from "@/store/modules/donationForm/actions.type";

export default {
  name: "DonationForm",
  components: { DonationFormSuggestion, DonationFormInput },
  comments: [
    DonationFormSuggestion
  ],
  computed: {
    suggestions: function () {
      return this.$store.getters["donationForm/convertedPresets"];
    },
    currency: function() {
      return this.$store.state.donationForm.currency;
    },
    completed: function () {
      return this.succeed || this.failed;
    }
  },
  methods: {
    donate: function() {
      this.$store.dispatch(`donationForm/${DONATE}`).then(() => {
        this.succeed = true;
      }).catch(error => {
        this.failed = true;
        console.log(error.response);
      });
    },
    back: function() {
      this.succeed = false;
      this.failed = false;
    }
  },
  data: () => {
    return {
      succeed: false,
      failed: false
    }
  }
}
</script>

<style scoped>

</style>
