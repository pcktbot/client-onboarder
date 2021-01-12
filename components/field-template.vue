<template>
  <div>
    <!-- FORM LABEL STARTS -->
    <label v-if="dependencyMet(f)" :for="f.dataKey" class="text-uppercase text-muted font-weight-bold">
      {{ f.label }}
      <b-icon-info-circle
        v-if="f.description"
        v-b-tooltip.click.v-tertiary-70="f.description"
        variant="secondary-30"
        style="cursor: pointer;"
      />
    </label>
    <!-- FORM LABEL ENDS -->
    <!-- CUSTOM COMPONENETS START -->
    <div v-if="customComponents.includes(f.component)">
      <component
        :is="f.component"
        :id="f.dataKey"
        v-bind="{ field:f, fieldData: locationProperties[f.dataKey]}"
        @change="onUpdate"
      />
    </div>
    <!-- CUSTOM COMPONENETS END -->
    <div v-else>
      <b-input-group
        v-if="f.component === 'checkbox'"
      >
        <b-form-checkbox
          :id="f.dataKey"
          :checked="locationProperties[f.dataKey]"
          switch
          class="global-checkbox"
          @change="onUpdate({ val: $event, field: f})"
        />
        <b-input-group-append class="d-flex text-gray-60 align-items-baseline px-3">
          {{ f.settings.options[locationProperties[f.dataKey]] }}
        </b-input-group-append>
      </b-input-group>
      <b-form-radio-group
        v-else-if="f.component === 'radio-group'"
        :id="f.dataKey"
        :buttons="!!(f.dataKey === 'icon_selection')"
        :checked="locationProperties[f.dataKey]"
        :options="f.settings.options"
        button-variant="light"
        @change="onUpdate({ val: $event, field: f })"
      />
      <b-form-textarea
        v-else-if="f.component === 'text-area'"
        :id="f.dataKey"
        rows="3"
        :value="locationProperties[f.dataKey]"
        @input="onUpdate({ val: $event, field: f })"
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
          @change="onUpdate({ val: $event, field: f})"
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
        @input="onUpdate({ val: $event, field: f })"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Fields from '~/mixins/fields'
import CheckboxGroupExpanded from '~/components/checkbox-group-expanded'
import DualListbox from '~/components/dual-listbox'
import TodoList from '~/components/todo-list'
export default {
  components: {
    CheckboxGroupExpanded,
    DualListbox,
    TodoList
  },
  mixins: [Fields],
  props: {
    f: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      customComponents: ['checkbox-group-expanded', 'dual-listbox', 'todo-list', 'radio-image-group']
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
      updatedSelected: 'locations/updateSelected'
    }),
    onUpdate ({ val, field }) {
      const key = field.dataKey
      if (field.settings && field.settings.dependentFields) {
        field.settings.dependentFields.forEach((dependentKey) => {
          this.updatedSelected({ key: dependentKey, val: null })
        })
      }
      this.updatedSelected({ key, val })
    },
    dependencyMet (f) {
      let val = true
      if (f.component === 'input' && f.settings && f.settings.dependentOn) {
        val = this.locationProperties[f.settings.dependentOn]
      }
      return val
    },
    getOptions (f) {
      const dependentField = f.settings.dependentOn
      let options = f.settings.options
      if (dependentField) {
        options = f.settings.options[this.locationProperties[dependentField]].options
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
