<template>
  <div id="app">
    <b-navbar variant="primary" type="dark">
      <b-navbar-brand tag="h1" class="mb-0">
        <router-link to="/">
          <b-button variant="primary">AppQuestion</b-button>
        </router-link>
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-dropdown v-if="user != null" :text="user.firstname+' '+user.lastname+' ('+user.company+')'" variant="primary">
          <b-dropdown-item @click="$router.push('/questionnaire')">Commencer le test</b-dropdown-item>
          <b-dropdown-item>Mes résultats</b-dropdown-item>
          <b-dropdown-item v-if="(user.firstname == 'admin')&&(user.lastname == 'admin')&&(user.company == 'admin')">Tous les Résultats</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item @click="signOut">Déconnexion</b-dropdown-item>
        </b-dropdown>
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
    mounted(){
      this.setUser()
    },
    methods:{
      setUser(){
        try {
          this.user = JSON.parse(sessionStorage.getItem("currentUser"))
        } catch (e) {
          this.user = null
        }
      },
      signOut(){
        this.user = null
        sessionStorage.setItem("currentUser","")
        this.$router.push("/")
      }
    }
  }
</script>