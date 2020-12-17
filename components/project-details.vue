<template>
  <div class="mb-0">
    <div class="d-flex justify-content-end px-2 mb-2">
      <b-btn
        v-b-toggle.project-details
        variant="outline-secondary"
        class="px-4 py-2 text-uppercase ml-auto"
        style="border-width: 0px; border-radius: 6px; font-size: 0.9em;"
      >
        Project Details
        <b-icon-chevron-down scale="0.75em" />
      </b-btn>
    </div>
    <b-collapse id="project-details">
      <div class="inset-jumbo mr-5 p-5">
        <b-progress :max="100" style="border-radius: 25px;" class="mb-3">
          <b-progress-bar :value="50" variant="primary-80" />
        </b-progress>
        <span class="text-tertiary text-uppercase font-weight-bold">
          {{ project.projectName }}
        </span>
        {{ project }}
      </div>
    </b-collapse>
  </div>
</template>

<script>
export default {
  computed: {
    project () {
      return this.$store.state.projects.selectedProject
    }
  }
}
</script>

<style>
.inset-jumbo {
  background-color: #dfe7ee;
  border-radius: 0 0 30px 0;
}
</style>
