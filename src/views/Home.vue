<template>
  <div>
    <Login @setUser="setUser"/>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'

export default {
  name: 'home',
  mounted: function () {
    this.setUser()
  },
  components: {
    Login
  },
  methods: {
    //on demande à l'élément parent d'aller récupérer l'utilisateur courant
    setUser() {
      this.$emit('setUser');
    }
  }
}
</script>
