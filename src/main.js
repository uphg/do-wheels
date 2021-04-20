import Vue from 'vue'
import App from './App.vue'

import Button from './components/button'
import Countdown from './components/Countdown'

Vue.component('do-button', Button)
Vue.component('do-countdown', Countdown)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
