<template>
  <div id="app">
    <div>
      <do-button>主要按钮</do-button>
    </div>
    <div>
      <do-countdown
        :count="60"
        @count-start="countStart"
        @count-end="countEnd"
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
      count: 60
    }
  },
  methods: {
    countStart() {
      console.log('计时开始')
    },
    countEnd() {
      console.log('计时结束')
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
