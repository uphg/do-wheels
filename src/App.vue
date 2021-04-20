<template>
  <div id="app">
    <div>
      <do-button>主要按钮</do-button>
    </div>
    <div>
      <do-countdown
        ref="countdown"
        :count="5"
        @count-open="isCount = true"
        @count-end="isCount = false"
        @click="clickCount"
      />
    </div>
  </div>
</template>
<script>
import DoButton from './components/button.vue'
import DoCountdown from './components/Countdown.vue'

export default {
  name: 'App',
  components: {
    DoButton,
    DoCountdown
  },
  data() {
    return {
      isCount: false
    }
  },
  methods: {
    clickCount() {
      if (!this.isCount) {
        console.log('开启倒计时')
        this.$refs['countdown'].startCount()
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
