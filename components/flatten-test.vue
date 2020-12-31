<template>
  <div class="px-1 py-3">
    <b-table
      :fields="['required', 'label', 'dataKey'].map(l => ({ key: l, sortable: true }))"
      :items="items"
      small
      striped
    >
      <template v-slot:cell(label)="{ item }">
        <b-form-group
          label-class="text-uppercase text-muted font-weight-bold"
          class="mr-2"
          style="flex: 1 1 auto;"
        >
          <template v-slot:label>
            {{ item.label }}
            <b-icon-info-circle
              v-if="item.description"
              v-b-tooltip.click.v-tertiary-70="item.description"
              variant="secondary-30"
              style="cursor: pointer;"
            />
          </template>
          <span
            v-if="item.inputType === 'select'"
            class="section-group"
          >
            <b-form-select
              :id="item.dataKey"
              :options="item.settings ? item.settings.options : []"
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
            :type="item.inputType"
            :placeholder="item.placeholder"
          />
        </b-form-group>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      fieldData: {}
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