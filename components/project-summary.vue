<template>
  <div class="">
    <p class="h4 font-weight-bold mb-1">
      {{ name }}
    </p>
    <p class="d-flex justify-content-between align-items-center mb-1">
      <span class="h4">
        <span class="font-italic mr-1 text-muted" style="font-size: 0.6em;">
          Project Type:
        </span>
        {{ type }}
      </span>
      <b-badge class="px-3">
        {{ status }}
      </b-badge>
    </p>
    <p class="d-flex justify-content-between align-items-center mb-1">
      <span class="font-italic">
        Contract Date
      </span>
      <span class="font-weight-bold">
        {{ contractDate }}
      </span>
    </p>
    <p class="d-flex justify-content-between align-items-center">
      <span class="font-italic">
        Estimated Go-Live
      </span>
      <span class="font-weight-bold">
        {{ estGoLive }}
      </span>
    </p>
    <slot name="cta">
      <b-btn
        variant="outline-secondary"
        block
      >
        <b-icon-envelope-fill />
        Send Reminder to Your Project Team
      </b-btn>
    </slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'ClientName-5-Locations',
      type: 'Add Locations',
      contractDate: '2020-11-10',
      estGoLive: '2020-11-11',
      status: 'In Progress',
      projectManager: 'Project Manager'
    }
  }
}
</script>

<style>

</style>
