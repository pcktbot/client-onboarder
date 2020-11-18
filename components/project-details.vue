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
      <b-card-group deck class="p-5">
        <b-card bg-variant="gray-10" border-variant="gray-10">
          <project-summary />
        </b-card>
        <b-card>
          <project-client />
        </b-card>
      </b-card-group>
    </b-collapse>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
