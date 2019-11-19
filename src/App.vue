<template>
  <div id="app">
    <b-navbar variant="primary" type="dark">
      <b-navbar-brand tag="h1" class="mb-0">
        <b-button variant="primary" @click="signOut">AppQuestion</b-button>
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-dropdown v-if="user != null" :text="user.firstname+' '+user.lastname+' ('+user.company+')'" variant="primary">
          <b-dropdown-item @click="$router.push('/questionnaire')">Commencer le test</b-dropdown-item>
          <b-dropdown-item @click="$router.push('/my_results')">Mes résultats</b-dropdown-item>
          <b-dropdown-item v-if="(user.firstname == 'admin')&&(user.lastname == 'admin')&&(user.company == 'admin')" @click="$router.push('/all_results')">Tous les Résultats</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item @click="signOut">Déconnexion</b-dropdown-item>
        </b-dropdown>
      </b-navbar-nav>
    </b-navbar>
    <router-view :key="$route.path" class="container" @setUser="setUser"/>
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
      var result = localStorage.getItem("results")
      if(result === null){
        localStorage.setItem("results", JSON.stringify([]))
      }
      this.signOut()
    },
    methods:{
      //fonction permettant de récupérer l'utilisateur courant
      setUser(){
        try {
          this.user = JSON.parse(sessionStorage.getItem("currentUser"))
        } catch (e) {
          this.user = null
        }
      },
      //fonction permettant de déconnecter l'utilisateur courant
      signOut(){
        this.user = null
        sessionStorage.setItem("currentUser","")
        this.$router.push("/")
      }
    }
  }
</script>