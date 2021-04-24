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
    <div>
      <do-icon name="alarm" />
      <do-icon name="aspect-ratio" />
    </div>
    <div>
      <do-button icon="bug">ICON按钮</do-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
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
