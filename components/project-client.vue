<template>
  <div>
    <p class="h3 font-weight-bold">
      {{ client.name }}
    </p>
    <p>
      {{ client.vertical }}
    </p>
    <div class="d-flex justify-content-between p-3">
      <b-icon-stopwatch variant="error-30" scale="3em" />
      <b-icon-stopwatch variant="warning-30" scale="3em" />
      <b-icon-check-circle variant="success-30" scale="3em" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    client: {
      type: Object,
      default () {
        return {
          name: 'Client Name',
          vertical: 'Client Vertical'
        }
      }
    }
  }
}
</script>

<style>

</style>
