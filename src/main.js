import Vue from 'vue'
import App from './App.vue'
import router from './router'

import {SimpleSVG} from 'vue-simple-svg'
Vue.component('simple-svg', SimpleSVG)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
