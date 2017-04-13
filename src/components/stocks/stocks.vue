<template>
  <div >
    <div v-for="stock in stocks">
      <app-stock v-bind:stock="stock"></app-stock>
    </div>
  </div >
</template>

<script >
  import appStock from './stock.vue';

  export default {
    components: {
      appStock,
    },
    computed: {
      stocks(){
        return this.$store.getters.stocks;
      }
    },
  }
</script >