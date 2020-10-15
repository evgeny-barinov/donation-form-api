<template>
  <div id="app">
    <div class="row justify-content-center">
      <div class="col-4">
        <donation-form></donation-form>
      </div>
    </div>
  </div>
</template>

<script>
import DonationForm from "@/components/DonationForm";

export default {
  name: 'App',
  components: {
    DonationForm,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
