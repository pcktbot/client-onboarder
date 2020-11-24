<template>
  <div class="px-5 py-5">
    <div
      v-for="(field, i) in category.fields"
      :key="`field-row-${i}`"
      class="d-flex justify-content-between w-100 mb-0 flex-wrap"
    >
      <b-form-group
        v-for="f in field"
        :key="f.id"
        :class="{ 'inline-group-ctn': f.hasMergeConflict }"
        :style="{ 'max-width: 50%;': field.length > 1 }"
        label-class="text-uppercase text-muted font-weight-bold"
        class="mr-2"
        style="flex: 1 1 auto;"
      >
        <!-- form field label starts -->
        <template v-slot:label>
          {{ f.label }}
          <b-icon-info-circle
            v-if="f.description"
            v-b-tooltip.hover.v-light="f.description"
            variant="secondary-20"
            style="cursor: pointer;"
          />
        </template>
        <!-- form field label ends -->
        <span
          v-if="f.type === 'select'"
          class="section-group"
        >
          <b-form-select
            :value="category.fieldData[f.id]"
            :options="f.options"
            :disabled="f.hasMergeConflict"
            class="section-group__select"
          />
          <span class="section-group__caret">
            <b-icon-chevron-down
              variant="light"
            />
          </span>
        </span>
        <b-form-input
          v-else
          :type="f.type"
          :value="category.fieldData[f.id]"
          :placeholder="f.placeholder"
          :disabled="f.hasMergeConflict"
          class="section-input"
        />
        <difference-resolver v-if="f.hasMergeConflict" />
      </b-form-group>
    </div>
    <div class="d-flex justify-content-end mb-3 mt-4">
      <b-btn
        variant="outline-error-20"
        class="text-uppercase font-weight-bold mr-2 px-4"
        style="border-width: 0px; border-radius: 6px;"
      >
        Abandon Changes
      </b-btn>
      <b-btn
        variant="secondary"
        class="text-uppercase font-weight-bold mr-2 px-4"
        style="border-radius: 8px;"
      >
        Save Changes
      </b-btn>
    </div>
  </div>
</template>

<script>
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
  methods: {
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
.inline-group-ctn {
  position: relative;
}
.section-group {
  position: relative;
  &__select {
    background: none;
    background-color: white;
    border: 2px solid #93999f;
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
    background-color: #93999f;
    z-index: 11;
    border-radius: 6px;
    text-align: center;
    box-shadow: 0 1px 4px rgba(203, 206, 209, 1);
  }
}
.section-input.form-control {
  border: 2px solid #93999f;
  border-radius: 6px;
  box-shadow: inset 0 1px 4px rgba(203, 206, 209, 1);
}
</style>
