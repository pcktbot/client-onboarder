<template>
  <div class="inline-group-select d-flex align-items-center justify-content-start text-error mb-1">
    <b-badge variant="error" class="mr-2">
      <b-icon-arrows-angle-contract scale="0.75em" />
      MIXED VALUES
    </b-badge>
    <b-form-radio-group
      v-model="selected"
      :options="options"
      buttons
      size="sm"
      button-variant="outline-error"
      @input="onSelected"
    >
      <b-form-radio value="Do not override" button-variant="gray-20">
        Do not override
      </b-form-radio>
    </b-form-radio-group>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default () {
        return ['first', 'second', 'third']
      }
    },
    fieldName: {
      type: String,
      default: 'default-field-ref'
    }
  },
  data () {
    return {
      selected: null
    }
  },
  methods: {
    onSelected (evt) {
      this.$emit('resolve-diff', { field: this.fieldName, value: evt })
    }
  }
}
</script>

<style lang="scss">
.inline-group-select {
  position: absolute;
  z-index: 12;
  bottom: 0;
  left: 0;
  transform: translate(10px, 0%);
}
</style>
