<template>
  <div>
    <p>
      {{ client.name }}
    </p>
    <p>
      {{ client.vertical }}
    </p>
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
