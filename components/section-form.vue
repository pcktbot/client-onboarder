<template>
  <div class="px-5 py-3">
    <div
      v-for="(sectionType, idx) in fieldData"
      :key="`section-row-${idx}`"
    >
      <div
        v-for="(section, i) in sectionType"
        :key="`field-row-${i}`"
        class="d-flex justify-content-between w-100 mb-0 flex-wrap"
      >
        <h5 class="text-uppercase text-muted font-weight-bold">
          {{ section.name ? section.name : null }}
        </h5>
        <div
          v-for="(fields, index) in section.fields"
          :key="`field-row-${index}`"
          class="d-flex justify-content-between w-100 mb-0 flex-wrap"
        >
          <b-form-group
            v-for="f in fields"
            :key="f.dataKey"
            :style="{ 'max-width: 50%;': fields.length > 1 }"
            class="mr-2"
            style="flex: 1 1 auto;"
          >
            <field-template v-bind="{ f }" />
          </b-form-group>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-end mb-3 mt-4">
      <b-btn
        variant="secondary"
        class="text-uppercase font-weight-bold mr-2 px-3 py-2"
        style="border-radius: 4px;"
        @click="onSave(category.id, category.fields)"
      >
        Save Changes
      </b-btn>
      <b-btn
        variant="transparent"
        class="text-uppercase text-secondary-30 font-weight-bold mr-2 py-3 px-4"
        style="border-width: 0px; border-radius: 4px;"
        @click="onRevert(category.id)"
      >
        Abandon Changes
      </b-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Fields from '~/mixins/fields'
export default {
  mixins: [Fields],
  props: {
    category: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      locations: state => state.locations.locations,
      selected: state => state.locations.selected
    }),
    locationProperties () {
      return this.locations[this.selected[0]].properties
    },
    fieldData () {
      const fields = this.category.fields
      const subsections = this.category.subsections
      return [[{ fields }], subsections]
    }
  },
  methods: {
    dependencyMet (f) {
      let val = true
      if (f.component === 'input' && f.settings && f.settings.dependentOn) {
        val = this.locationProperties[f.settings.dependentOn]
      }
      return val
    }
  }
}
</script>

<style lang="scss">
$gray: #c1c1c1;

</style>
