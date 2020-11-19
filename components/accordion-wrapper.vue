<template>
  <div class="accordion p-3" role="tablist">
    <b-card
      v-for="(cat, i) in categories"
      :key="`${prefix}-location-category-${i}`"
      class="soft-shadow mb-3"
      no-body
    >
      <b-card-header
        :class="[{ 'bg-secondary-10' : cat.isBulk }]"
        role="tab"
      >
        <b-btn
          v-b-toggle="cat.id"
          block
          variant="transparent"
          class="px-2 py-1 d-flex align-items-center justify-content-between"
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
      </b-card-header>
      <b-collapse
        :id="cat.id"
        :visible="i === 0"
        :accordion="`${prefix}-accordion`"
        role="tabpanel"
      >
        <section-form v-bind="{ fields: cat.fields, fieldData: cat.fieldData }" />
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    prefix: {
      type: String,
      default: 'default'
    },
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
    toKebabCase (string) {
      return string
        .replace(/([a-z])([A-Z])/g, '$1-$2')
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
