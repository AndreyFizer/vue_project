<template >
  <div class="col-sm-6 col-md-4" >
    <div class="panel panel-success" >
      <div class="panel-heading" >
        <h3 class="panel-title" >
          {{ stock.name }}
          <small >(price: {{ stock.price }})</small >
        </h3 >
      </div >
      <div class="panel-body" >
        <div class="pull-left" >
          <input
              type="text"
              class="form-control"
              placeholder="Quantity"
              v-model="quantity"
              :class="{danger: rejectTransaction}"
          >
        </div >
        <div class="pull-right" >
          <button
              class="btn btn-success"
              v-on:click="onStockSave"
              :disabled="rejectTransaction || quantity<=0 || !Number.isInteger(+quantity)"
          >
            {{ rejectTransaction ? 'Rejected' :'Buy'}}
          </button >
        </div >
      </div >
    </div >
  </div >
</template >

<script >
  export default {
    data: () => ({
      quantity: 0,
    }),
    computed: {
      funds(){
        return this.$store.getters.funds;
      },
      rejectTransaction(){
        return this.quantity * this.stock.price > this.funds;
      }
    },
    methods: {
      onStockSave(){
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity,
        };
        this.$store.dispatch('buyStocks', order);
        this.quantity = 0;
      }
    },
    props: [ 'stock' ]
  }
</script >

<style scoped="">
  .danger {
    border: 1px solid red;
  }
</style >