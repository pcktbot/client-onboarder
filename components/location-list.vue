<template>
  <b-list-group class="location-list rounded-0">
    <b-list-group-item
      v-for="(location, i) in locations"
      :key="`location-select-${i}`"
      :class="[{ 'is-active': location.status === 'incomplete' }]"
      button
      class="location-list__item bg-transparent"
      @click="onLocationSelect(location)"
    >
      <h3 class="text-gray-10 mb-0">
        {{ location.name }}
      </h3>
      <p class="text-muted mb-0">
        {{ location.status }}
      </p>
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

<style lang="scss">
.location-list {
  &__item {
    &.is-active {
      box-shadow: inset -10px 0 0 0 red;
    }
  }
}
</style>
