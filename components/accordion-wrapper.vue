<template>
  <div class="accordion p-3" role="tablist">
    <b-card
      v-for="(cat, i) in categories"
      :key="`location-category-${i}`"
      class="soft-shadow mb-5"
      role="tab"
    >
      <template v-slot:header>
        <b-btn
          block
          variant="transparent"
          class="px-2 py-1 d-flex align-items-center justify-content-between"
          @click="$root.$emit('bv:toggle:collapse', toKebabCase(cat.label))"
        >
          <h3 class="mb-0 text-uppercase font-weight-bold text-muted">
            {{ cat.label }}
            <b-icon-question-circle variant="secondary" scale="0.5em" />
          </h3>
          <span class="text-gray-50 small align-self-end font-italic">
            est. time:
            <span class="font-weight-bold">
              {{ cat.time }}
            </span>
          </span>
          <div class="flex-grow-1" />
          <span class="text-secondary small text-uppercase">
            Close
            <b-icon-dash />
          </span>
        </b-btn>
      </template>
      <b-collapse
        :id="toKebabCase(cat.label)"
        accordion="sections-accordion"
        role="tabpanel"
        visible
      >
        <slot :name="toKebabCase(cat.label)" />
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default () {
        return [
          {
            label: 'Location Details',
            description: '',
            time: '20 mins',
            isComplete: false,
            data: []
          },
          {
            label: 'Amenities',
            description: '',
            time: '20 mins',
            isComplete: false,
            data: []
          },
          {
            label: 'Assets',
            description: '',
            time: '20 mins',
            isComplete: false,
            data: []
          }
        ]
      }
    }
  },
  methods: {
    toKebabCase(string) {
      return string
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/\s+/g, '-')
        .toLowerCase()
    }
  }
}
</script>

<style lang="scss">
.soft-shadow {
  box-shadow: 0 5px 20px 0 rgba(10, 10, 10, 0.2);
  &.card {
    border-radius: 10px;
  }
}
</style>
