<template>
  <b-navbar
    variant="primary"
    style="height: 65px;"
    toggleable="md"
    type="dark"
    class="py-0"
  >
    <b-navbar-brand to="/" class="d-flex align-items-center">
      <b-img
        src="/g5-logo.png"
        width="50"
        height="50"
        alt="g5-logo"
        title="G5 Marketing"
        class="mx-3"
      />
      <h2 class="text-success-0">
        <b-icon-compass scale="0.75em" />
        Client Onboarding
      </h2>
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto pr-2 align-self-center h-100">
      <slot />
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
}
</script>

<style>

</style>
