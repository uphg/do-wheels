import Vue from 'vue'
import App from './App.vue'
// import '../icons/index' // 引入 icon
// import '../icons/svg/at.svg' // 引入 icon

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
