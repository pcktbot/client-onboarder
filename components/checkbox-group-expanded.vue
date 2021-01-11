<template>
  <div>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 0.5em 0;">
      <b-form-checkbox
        v-for="f in field.settings.options"
        :key="`checkbox-${f.value}`"
        :checked="isChecked(f.value)"
        switch
        class="ml-3 global-checkbox font-weight-bold"
        @change="onChange(field.dataKey, f.value, $event)"
      >
        {{ f.text }}
      </b-form-checkbox>
    </div>
    <b-form-input
      v-if="fieldData.other"
      :value="fieldData.other.toString()"
      placeholder="Enter Additional Here"
      style="max-width: 50%; border-width: 2px;"
      class="mt-2"
      @input="onInput($event)"
    />
  </div>
</template>

<script>
export default {
  props: {
    field: {
      type: Object,
      default () {
        return {}
      }
    },
    fieldData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      localData: [],
      other: ''
    }
  },
  methods: {
    isChecked (prop) {
      return !!((this.fieldData[prop] || Array.isArray(this.fieldData[prop])))
    },
    onChange (property, key, val) {
      if (key === 'other') {
        val = val ? [] : false
      }
      const replacement = Object.assign({}, this.fieldData)
      replacement[key] = val
      this.$emit('change', { key: property, val: replacement })
    },
    onInput (val) {
      const replacement = Object.assign({}, this.fieldData)
      replacement.other = val.trim().split(',')
      this.$emit('change', { key: this.field.dataKey, val: replacement })
    }
  }
}
</script>

<style>

</style>
