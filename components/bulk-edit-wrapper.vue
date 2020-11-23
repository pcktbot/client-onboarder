<template>
  <div class="bulk-banner py-5 px-4">
    <b-btn
      class="bulk-banner__close small text-uppercase text-secondary"
      variant="transparent"
      @click="$store.dispatch('bulk/toggleBulkMode', false)"
    >
      Exit
      <b-icon-x-circle />
    </b-btn>
    <div class="bulk-banner__inset">
      <slot />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.bulk-banner {
  position: relative;
  box-shadow: inset 0 1px 1px 0 #2c8082, inset 0 250px 0 0 #e2efef;
  &__close {
    position: absolute;
    right: 0;
    transform: translate(-25%, -100%);
  }
}
</style>
