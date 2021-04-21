
<template>
  <svg class="do-icon" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'DoIcon',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.name}`
    }
  }
}
</script>

<style lang="scss">
.do-icon {
  vertical-align: -0.15em;
  overflow: hidden;
}
</style>
