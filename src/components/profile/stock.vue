<template>
  <div class="col-sm-6 col-md-4" >
    <div class="panel panel-info" >
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(price: {{ stock.price }} | quantity: {{ stock.quantity }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
              type="text"
              class="form-control"
              placeholder="Quantity"
              v-model="quantity"
              :class="{danger: inefficientQantity}"
          >
        </div>
        <div class="pull-right">
          <button
              class="btn btn-success"
              v-on:click="onStockSell"
              v-bind:disabled="(inefficientQantity || quantity <= 0 || !Number.isInteger(+quantity))"
          >
            {{ inefficientQantity ? 'Not enaugh' : 'Sell'}}
          </button>
        </div>
      </div>
    </div >
  </div >
</template>

<script >
  import { mapActions } from 'vuex';

  export default {
    data: () => ({
      quantity: 0,
    }),
    computed: {
      inefficientQantity(){
        return this.quantity > this.stock.quantity;
      }
    },
    methods: {
      ...mapActions([
        'sellStock'
      ]),
      onStockSell(){
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity,
        };
        this.sellStock(order);
        this.quantity = 0;
      }
    },
    props: ['stock']
  }
</script >

<style scoped >
  .danger {
    border: 1px solid red;
  }
</style >