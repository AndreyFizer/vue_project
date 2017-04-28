<template >
  <nav class="navbar navbar-default" >
    <div class="container-fluid" >
      <div class="navbar-header" >
        <router-link
            to="/"
            class="navbar-brand"
        >
          Stocks trader

        </router-link >
      </div >

      <div class="collapse navbar-collapse" >

        <ul class="nav navbar-nav" >
          <router-link
              to="/profile"
              activeClass="active"
              tag="li"
          >
            <a >Profile</a >
          </router-link >
          <router-link
              to="/stocks"
              activeClass="active"
              tag="li"
          >
            <a >Stocks</a >
          </router-link >
        </ul >

        <strong class="navbar-text navbar-right">Funds : {{ funds | currency }}</strong>
        <ul class="nav navbar-nav navbar-right" >
          <li ><a href="#" @click="handleEndDay">End day</a ></li >
          <li
              class="dropdown"
              :class="{open: dropDown}"
              @click="dropDown = !dropDown"
          >
            <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false" >
              Save & Load <span class="caret" ></span >
            </a >
            <ul class="dropdown-menu" >
              <li ><a href="#" >Save</a ></li >
              <li ><a href="#" >Load</a ></li >
            </ul >
          </li >
        </ul >
      </div >
    </div >
  </nav >
</template >

<script >
  import { mapActions } from 'vuex';

  export default {
    data: () => ({
      dropDown: false,
    }),
    computed: {
      funds(){
        return this.$store.getters.funds;
      }
    },
    methods: {
      ...mapActions([
        'randomStocks'
      ]),
      handleEndDay() {
        this.randomStocks();
      },
    },
  }
</script >