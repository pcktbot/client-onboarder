<template>
  <div class="px-1 py-3">
    <b-input-group class="mb-3">
      <b-input-group-prepend class="d-flex align-items-center justify-content-center px-3">
        <b-icon-search variant="gray" />
      </b-input-group-prepend>
      <b-form-input
        v-model.trim="search"
        debounce="200"
        type="search"
        style="border-width: 2px; border-radius: 4px;"
      />
    </b-input-group>
    <b-table
      :fields="['required', 'label'].map(l => ({ key: l, sortable: true }))"
      :items="items"
      small
      striped
      outlined
    >
      <template v-slot:cell(required)="{ item }">
        <b-icon-exclamation-triangle-fill v-if="item.required" variant="error" />
      </template>
      <template v-slot:cell(label)="{ item }">
        <b-form-group
          label-class="text-uppercase text-muted font-weight-bold"
          class="mr-2"
          style="flex: 1 1 auto;"
        >
          <field-template v-bind="{ f: item }" />
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
      search: '',
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
