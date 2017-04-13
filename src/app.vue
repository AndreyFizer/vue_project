<template >
  <div class="container" >
    <app-header ></app-header >
    <div class="row" >
      <div class="col-xs-12" >
        <router-view ></router-view >
      </div >
    </div >
  </div >
</template >

<script >
  import appHeader from './components/header.vue';

  export default {
    components: {
      appHeader,
    },
    created(){
      this.$store.dispatch('fetchStocks');
    }
  }
</script >

<style >
  body {
    padding: 30px;
  }
</style >
