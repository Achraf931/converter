import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Ionic from '@ionic/vue'
import axios from 'axios'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false

Vue.use(Ionic)
Vue.use(Vuelidate)

Vue.prototype.axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
