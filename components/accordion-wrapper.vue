<template>
  <div class="accordion p-3" role="tablist">
    <b-breadcrumb>
      <b-breadcrumb-item
        v-for="(cat, i) in toBreadcrumb(categories)"
        :key="`bcrumb-${i}`"
        :href="cat.href"
      >
        <b-icon-check-circle-fill variant="secondary" scale="1.1em" />
        {{ cat.text }}
      </b-breadcrumb-item>
    </b-breadcrumb>
    <b-card
      v-for="(cat, i) in categories"
      :key="`${prefix}-location-category-${i}`"
      :bg-variant="cat.isComplete ? 'gray-20' : ''"
      :border-variant="cat.isComplete ? 'gray-20' : ''"
      class="soft-shadow mb-3"
      no-body
    >
      <b-card-header
        :class="[{ 'bg-secondary-10' : cat.isBulk }, 'border-0']"
        role="tab"
      >
        <b-btn
          v-b-toggle="cat.id"
          block
          variant="transparent"
          class="px-2 pt-1 pb-0 d-flex align-items-center justify-content-between"
        >
          <h4 class="mb-0 text-uppercase font-weight-bold text-gray-60">
            {{ cat.label }}
            <b-icon-question-circle variant="secondary-20" scale="0.5em" shift-v="3" />
          </h4>
          <span class="text-gray-30 small align-self-end font-italic mb-1">
            est. time:
            <span class="font-weight-bold">
              {{ cat.time }}
            </span>
          </span>
          <div class="flex-grow-1" />
          <span class="when-open text-secondary small text-uppercase">
            Close
            <b-icon-dash />
          </span>
          <span class="when-closed text-secondary small text-uppercase">
            Edit
            <b-icon-plus />
          </span>
        </b-btn>
      </b-card-header>
      <b-collapse
        :id="cat.id"
        :visible="i === 0"
        :accordion="`${prefix}-accordion`"
        role="tabpanel"
      >
        <section-form v-bind="{ category: getCategory(cat.id)}" />
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Fields from '~/mixins/fields'
export default {
  mixins: [Fields],
  computed: {
    ...mapState({
      prefix: (state) => {
        return state.bulk.isEnabled
          ? 'bulk'
          : 'general'
      }
    })
  },
  methods: {
    getCategory (id) {
      return this.categories
        .find(category => id === category.id)
    },
    toBreadcrumb (categories) {
      return categories.map((cat) => {
        return {
          text: cat.label,
          status: 'complete',
          href: `#${cat.id}`
        }
      })
    }
  }
}
</script>

<style lang="scss">
.soft-shadow {
  box-shadow: 0 2px 4px 0 rgba(10, 10, 10, 0.2);
  &.card {
    border-radius: 10px;
  }
}
.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}
</style>
