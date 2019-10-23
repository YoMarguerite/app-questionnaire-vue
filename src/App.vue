<template>
  <div id="app">
    <b-navbar variant="primary" type="dark">
      <b-navbar-brand tag="h1" class="mb-0">
        <router-link to="/">
          <b-button variant="primary">AppQuestion</b-button>
        </router-link>
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-text v-if="user != null">{{user.firstname+" "+user.lastname+" ("+user.company+")"}}</b-nav-text>
      </b-navbar-nav>
    </b-navbar>
    <router-view class="container" @setUser="setUser"/>
  </div>
</template>

<script>
  export default{
    data: function () {
      return {
        user:null
      }
    },
    methods: {
      setUser(user) {
        this.user = user;
      }
    }
  }
</script>