<template>
  <button class="do-button" @click="$emit('click')">
    <svg v-if="icon && !loading" class="do-icon" aria-hidden="true">
      <use :xlink:href="`#icon-${icon}`" />
    </svg>
    <svg v-if="loading" class="do-icon" :class="{ 'do-loading': loading }" aria-hidden="true">
      <use xlink:href="#icon-loading" />
    </svg>
    <span class="do-button__content" :class="{ 'do-loading-text': loading }">
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
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" src="../styles/button.scss"></style>
<style lang="scss" src="../styles/icon.scss"></style>
<style lang="scss" src="../styles/loading.scss"></style>
