import Vue from 'vue'
import App from './App.vue'
import '../src/icon/svg'

import Button from '../src/components/Button.vue'
import Icon from '../src/components/Icon.vue'
import Countdown from '../src/components/Countdown.vue'

Vue.component('do-icon', Icon)
Vue.component('do-button', Button)
Vue.component('do-countdown', Countdown)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
