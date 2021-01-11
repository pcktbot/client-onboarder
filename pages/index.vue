<template>
  <div class="content">
    <primary-nav>
      <user-dropdown />
    </primary-nav>
    <article class="content__grid">
      content
    </article>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.content {
  position: relative;
  &__grid {
    position: absolute;
    top: 65px;
    height: calc(100vh - 65px);
    width: 100%;
    display: grid;
    grid-template-columns: minmax(min-content, 300px) auto;
    overflow-y: hidden;
  }
}
.main-content {
  background: white;
  min-height: 100%;
  border-radius: 50px 0 0 0;
  overflow-y: scroll;
  box-shadow: -1px -1px 0 rgba(12, 35, 64, 0.25);
  // box-shadow: -2px 0 20px rgba(12, 35, 64, 0.5);
}
</style>
