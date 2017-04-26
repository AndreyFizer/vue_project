<template>
  <div >
    <h1 > View and trade your profile </h1 >
    <h6>You may save and load your data</h6>
    <h6>Click to "End day" to begin new day</h6>
    <hr >
    <p>Your funds: {{ funds }}</p>
  </div >
</template>

<script >
  export default {
    computed: {
      funds(){
        return this.$store.getters.funds;
      }
    }
  }
</script >