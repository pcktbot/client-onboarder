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
        <span
          v-if="f.inputType === 'select'"
          class="section-group"
        >
          <b-form-select
            :id="f.dataKey"
            :options="f.options"
            :disabled="f.hasMergeConflict"
            class="section-group__select"
          />
          <span class="section-group__caret">
            <b-icon-chevron-down
              variant="gray-80"
            />
          </span>
        </span>
        <b-form-input
          v-else
          :id="f.dataKey"
          :type="f.inputType"
          :placeholder="f.placeholder"
          :disabled="f.hasMergeConflict"
          class="section-input"
        />
        <difference-resolver v-if="f.hasMergeConflict" />
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
