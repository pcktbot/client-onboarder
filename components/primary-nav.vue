<template>
  <b-navbar
    variant="primary-70"
    style="height: 65px; box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5); z-index: 10;"
    toggleable="md"
    type="dark"
    class="py-0"
  >
    <b-navbar-brand
      v-if="showBranding"
      to="/projects"
      class="d-flex align-items-center"
    >
      <b-img
        src="/g5-logo.png"
        width="50"
        height="50"
        alt="g5-logo"
        title="G5 Marketing"
        class="mx-3"
      />
      <h2 class="text-success-0 mb-0">
        <start-icon />
        Project Onboarding
      </h2>
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto pr-2 align-self-center h-100">
      <slot />
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  props: {
    showBranding: {
      type: Boolean,
      default: true
    }
  }
}
</script>
