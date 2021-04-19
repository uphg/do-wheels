<template>
  <span
    class="do-countdown"
    :class="{ disable: currentTime < count }"
    @click="startCount"
  >{{ currentText }}</span>
</template>
<script>
export default {
  props: {
    count: {
      type: Number,
      default: 60
    }
  },
  data() {
    return {
      currentTime: this.count
    }
  },
  computed: {
    currentText() {
      return this.currentTime >= this.count ? '获取验证码' : this.currentTime + '秒后重试'
    }
  },
  methods: {
    startCount() {
      if (this.currentTime >= this.count) {
        this.clock()
      }
    },
    clock() {
      console.log('this.currentTime')
      console.log(this.currentTime)
      if (this.currentTime <= 0) {
        this.currentTime = this.count
        this.$emit('count-end')
        return false
      }
      this.currentTime -= 1
      const timer = setTimeout(() => {
        this.clock()
        window.clearTimeout(timer)
      }, 1000)
    }
  }
}
</script>
<style lang="scss">
@import "~@/styles/countdown.scss";
</style>
