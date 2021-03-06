<template>
  <div class="px-5 py-3">
    <div
      v-for="(fields, i) in category.fields"
      :key="`field-row-${i}`"
      class="d-flex justify-content-between w-100 mb-0 flex-wrap"
    >
      <b-form-group
        v-for="f in fields"
        :key="f.dataKey"
        :style="{ 'max-width: 50%;': fields.length > 1 }"
        label-class="text-uppercase text-muted font-weight-bold"
        class="mr-2"
        style="flex: 1 1 auto;"
      >
        <!-- FORM LABEL STARTS -->
        <template v-slot:label>
          {{ f.label }}
          <b-icon-info-circle
            v-if="f.description"
            v-b-tooltip.click.v-tertiary-70="f.description"
            variant="secondary-30"
            style="cursor: pointer;"
          />
        </template>
        <!-- FORM LABEL ENDS -->
        <checkbox-group-expanded
          v-if="f.component === 'checkbox-group-expanded'"
          v-bind="{ field:f, fieldData: locationProperties[f.dataKey]}"
          @change="updatedSelected"
        />
        <dual-listbox
          v-else-if="f.component === 'dual-listbox'"
          v-bind="{ field:f, fieldData: locationProperties[f.dataKey]}"
          @change="updatedSelected"
        />
        <b-input-group
          v-else-if="f.component === 'checkbox'"
        >
          <b-form-checkbox
            :checked="locationProperties[f.dataKey]"
            switch
            class="global-checkbox"
            @change="updatedSelected({ key: f.dataKey, val: $event})"
          />
          <b-input-group-append class="d-flex text-gray-60 align-items-baseline px-3">
            {{ f.settings.options[locationProperties[f.dataKey]] }}
          </b-input-group-append>
        </b-input-group>
        <b-form-radio-group
          v-else-if="f.component === 'radio-group'"
          :checked="locationProperties[f.dataKey]"
          :options="f.settings.options"
          @change="updatedSelected({ key: f.dataKey, val: $event})"
        />
        <b-form-textarea
          v-else-if="f.component === 'text-area'"
          rows="3"
          :value="locationProperties[f.dataKey]"
          @input="updatedSelected({ key: f.dataKey, val: $event})"
        />
        <todo-list
          v-else-if="f.component === 'todo-list'"
          v-bind="{ field:f.dataKey, items: locationProperties[f.dataKey]}"
          @change="updatedSelected"
        />
        <span
          v-else-if="f.component === 'select'"
          class="section-group"
        >
          <b-form-select
            :id="f.dataKey"
            :value="locationProperties[f.dataKey]"
            :options="getOptions(f)"
            class="section-group__select"
            @change="updatedSelected({ key: f.dataKey, val: $event})"
          />
          <span class="section-group__caret">
            <b-icon-chevron-down
              variant="gray-80"
            />
          </span>
        </span>
        <b-form-input
          v-else-if="f.component === 'input' && dependencyMet(f)"
          :id="f.dataKey"
          :value="locationProperties[f.dataKey]"
          :type="f.type"
          :placeholder="f.placeholder"
          class="section-input"
          @input="updatedSelected({ key: f.dataKey, val: $event})"
        />
        <div v-else>
          {{ f }}
        </div>
      </b-form-group>
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
import { mapState, mapActions } from 'vuex'
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
    }
  },
  methods: {
    ...mapActions({
      updatedSelected: 'locations/updateSelected',
      updatePropObj: 'locations/updatePropObj',
      addPropArr: 'locations/addPropArr',
      updatePropArr: 'locations/updatePropArr',
      removeAtPropArr: 'locations/removeAtPropArr'
    }),
    dependencyMet (f) {
      let val = true
      if (f.settings && f.settings.dependentOn) {
        val = this.locationProperties[f.settings.dependentOn]
      }
      return val
    },
    getOptions (f) {
      const dependency = f.settings.dependentOn
      let options = f.settings.options
      if (dependency) {
        options = f.settings.options[this.locationProperties[dependency]].options
      }
      return options
    },
    validUrl (str) {
      const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i') // fragment locator
      return !!pattern.test(str)
    }
  }
}
</script>

<style lang="scss">
$gray: #c1c1c1;
.inline-group-ctn {
  position: relative;
}
.section-group {
  position: relative;
  &__select {
    background: none;
    background-color: white;
    border: 2px solid $gray;
    border-radius: 6px;
    box-shadow: inset 0 1px 4px rgba(203, 206, 209, 1);
  }
  &__caret {
    pointer-events: none;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 1.5em;
    height: 1.5em;
    transform: translate(-50%, 0.25em);
    color: #93999f;
    z-index: 11;
    border-radius: 6px;
    text-align: center;
    transition: 200ms ease-in;
  }
  &:hover > .section-group__caret {
    transform: translate(-50%, 0.15em);
  }
}
.section-input.form-control {
  border: 2px solid $gray;
  border-radius: 6px;
  box-shadow: inset 0 1px 3px rgba(203, 206, 209, 0.5);
  &::placeholder {
    color: #93999f;
  }
}
</style>
