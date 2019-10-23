<template>
  <div>
    <Login @setUser="setUser"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'

export default {
  name: 'home',
  mounted: function () {
    this.setUser(null)
  },
  components: {
    Login
  },
  methods: {
    setUser(user) {
      this.$emit('setUser', user);
    }
  }
}
</script>
