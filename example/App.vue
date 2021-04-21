<template>
  <div id="app">
    <div>
      <do-icon class="icon-setting" name="setting" />
      <do-icon class="icon-aspect-ratio" name="aspect-ratio" />
      <svg aria-hidden="true" :viewBox="iconAt.viewBox" class="icon-at">
        <use :xlink:href="'#'+iconAt.id" />
      </svg>
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
import '../icons/svg/at.svg' // 引入 icon
import iconAt from '../icons/svg/at.svg'
console.log('iconAt')
console.log(iconAt)
export default {
  name: 'App',
  data() {
    return {
      isCount: false,
      iconAt
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
.icon-setting {
  fill: #409eff;
}
.icon-aspect-ratio {
  fill: #409eff;
}
.icon-at {
  width: 100px;
  height: 100px;
  fill: blue;
}
</style>
