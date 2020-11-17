<template>
  <div class="accordion p-3" role="tablist">
    <b-card
      v-for="(cat, i) in categories"
      :key="`location-category-${i}`"
      class="soft-shadow mb-5"
    >
      <template v-slot:header>
        <b-btn
          block
          variant="transparent"
          class="px-2 py-1 d-flex align-items-center justify-content-between"
        >
          <h3 class="mb-0 text-uppercase font-weight-bold text-muted">
            {{ cat.label }}
            <b-icon-question-circle variant="secondary" scale="0.5em" />
          </h3>
          <span class="text-secondary small text-uppercase">
            Close
            <b-icon-dash />
          </span>
        </b-btn>
      </template>
      {{ cat }}
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
            id: 'amenities',
            time: '20 mins',
            isComplete: false,
            data: []
          },
          {
            id: 'assets',
            time: '20 mins',
            isComplete: false,
            data: []
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
.soft-shadow {
  box-shadow: 0 5px 20px 0 rgba(10, 10, 10, 0.2);
  & .card {
    border-radius: 10px;
  }
}
</style>
