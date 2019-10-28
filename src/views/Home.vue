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
    this.setUser(null)
  },
  components: {
    Login
  },
  methods: {
    setUser() {
      this.$emit('setUser');
    }
  }
}
</script>
