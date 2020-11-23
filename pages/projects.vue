<template>
  <div class="landing bg-white">
    <primary-nav :show-branding="false">
      <user-dropdown />
    </primary-nav>
    <div class="landing__content bg-white">
      <div class="landing__content__background d-flex align-items-center justify-content-center border border-error">
        <h1>
          <start-icon :size="`14em`" />
        </h1>
      </div>
      <project-select />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.landing {
  position: relative;
  &__content {
    position: absolute;
    top: 65px;
    height: calc(100vh - 65px);
    width: 100%;
    overflow: hidden;
    &__background {
      width: 65%;
      height: calc(100% - 20px);
      border-radius: 0 0 50px 0;
    }
  }
}
</style>
