<template>
  <button class="do-button">
    <svg v-if="icon" class="do-icon" aria-hidden="true">
      <use :xlink:href="`#icon-${icon}`" />
    </svg>
    <span class="do-button__content">
      <slot />
    </span>
  </button>
</template>
<script>
export default {
  name: 'DoButton',
  props: {
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" src="../styles/button.scss"></style>
<style lang="scss" src="../styles/icon.scss"></style>
