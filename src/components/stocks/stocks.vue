<template>
  <div >
    <div v-for="stock in stocks"><app-stock v-bind:stock="stock"></app-stock></div>
  </div >
</template>

<script >
  import appStock from './stock.vue';

  export default {
    data: () => ({
      stocks: [
        {id: 1, name: 'BMW', price: 150},
        {id: 2, name: 'Google', price: 200},
        {id: 3, name: 'Apple', price: 210},
        {id: 4, name: 'Twitter', price: 20},
      ],
    }),
    components: {
      appStock,
    },
  }
</script >