<template>
  <span
    class="do-countdown"
    :class="{ disable: disable }"
    @click="$emit('click', startCount)"
  >{{ currentText }}</span>
</template>
<script>
export default {
  name: 'DoCountdown',
  props: {
    count: {
      type: Number,
      default: 60
    }
  },
  data() {
    return {
      currentTime: this.count,
      disable: false
    }
  },
  computed: {
    currentText() {
      return !this.disable ? '获取验证码' : this.currentTime + '秒后重试'
    }
  },
  methods: {
    startCount() {
      if (this.currentTime >= this.count && !this.disable) {
        this.disable = true
        this.$emit('count-open')
        this.clock()
      }
    },
    clock() {
      if (this.currentTime <= 0) {
        this.disable = false
        this.currentTime = this.count
        this.$emit('count-end')
        return false
      }
      const timer = setTimeout(() => {
        this.currentTime -= 1
        window.clearTimeout(timer)
        this.clock()
      }, 1000)
    }
  }
}
</script>
<style lang="scss">
@import "~@/styles/countdown.scss";
</style>
