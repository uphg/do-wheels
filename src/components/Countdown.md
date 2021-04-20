# Countdown

## 基础案例

```vue
<template>
  <do-countdown
    ref="countdown"
    :count="5"
    @count-open="isCount = true"
    @count-end="isCount = false"
    @click="clickCount"
  />
</template>
<script>
export default {
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
```

## 使用 click 事件回调

```vue
<template>
  <do-countdown
    ref="countdown"
    @count-open="countOpen"
    @count-end="countEnd"
    @click="clickCountdown"
  />
</template>
<script>
export default {
  methods: {
    clickCountdown(startCount) {
      startCount()
    },
    countOpen() {
      console.log('计时开始')
    },
    countEnd() {
      console.log('计时结束')
    }
  }
}
</script>
```

## 使用 `$event` 显式调用

```vue
<template>
  <do-countdown
    @count-open="countOpen"
    @count-end="countEnd"
    @click="($event) => $event()"
  />
</template>
<script>
export default {
  methods: {
    countOpen() {
      console.log('计时开始')
    },
    countEnd() {
      console.log('计时结束')
    }
  }
}
</script>
```

## 属性

| 参数  | 说明                     | 类型   | 可选值   | 默认值 |
| ----- | ------------------------ | ------ | -------- | ------ |
| count | 倒计时开始时间（单位秒） | number | 任意数字 | 60     |

## 方法

| 方法名     | 说明                                       | 参数 |
| ---------- | ------------------------------------------ | ---- |
| startCount | 调用倒计时开始执行函数（倒数期间不会执行） | —    |

## 事件

| 事件名称   | 说明         | 回调参数                           |
| ---------- | ------------ | ---------------------------------- |
| click      | 点击事件     | $event，它默认传入 startCount 方法 |
| count-open | 倒计时开始后 | —                                  |
| count-end  | 倒计时结束后 | —                                  |

