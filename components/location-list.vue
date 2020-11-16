<template>
  <b-list-group class="location-list rounded-0">
    <b-list-group-item
      v-for="(location, i) in locations"
      :key="`location-select-${i}`"
      button
      class="location-list__item bg-transparent"
      @click="onLocationSelect(location)"
    >
      <h3 class="text-gray-10">
        {{ location.name }}
      </h3>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  props: {
    locations: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    onLocationSelect (loc) {
      this.$emit('location-change', loc)
    }
  }
}
</script>

<style>

</style>
