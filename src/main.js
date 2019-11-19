import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.prototype.$filters = Vue.options.filters

Vue.filter('formatDate', function (value) {
  return value.getDay()+"/"+value.getMonth()+"/"+value.getFullYear()+" "+value.getHours()+":"+value.getMinutes()+":"+value.getSeconds()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
