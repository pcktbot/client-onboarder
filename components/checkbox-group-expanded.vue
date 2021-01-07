<template>
  <div>
    <!-- <b-form-group
      label-class="text-uppercase text-muted font-weight-bold"
      class="mr-2"
      style="flex: 1 1 auto;"
    >
      <template v-slot:label>
        {{ field.label }}
        <b-icon-info-circle
          v-if="field.description"
          v-b-tooltip.click.v-tertiary-70="field.description"
          variant="secondary-30"
          style="cursor: pointer;"
        />
      </template> -->
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 0.5em 0;">
      <b-form-checkbox
        v-for="f in field.settings.options"
        :key="`checkbox-${f.value}`"
        :checked="fieldData[f.value]"
        switch
        class="ml-3 global-checkbox font-weight-bold"
        @change="onChange(f.value, $event)"
      >
        {{ f.text }}
      </b-form-checkbox>
    </div>
    <b-form-input
      v-if="localData.includes('other')"
      :value="other"
      placeholder="Enter Additional Here"
      style="max-width: 50%; border-width: 2px;"
      class="mt-2"
      @input="onInput($event)"
    />
    <!-- </b-form-group> -->
  </div>
</template>

<script>
export default {
  props: {
    field: {
      type: Object,
      default () {
        return {
          dataKey: 'copy_wants',
          component: 'checkbox-group-expanded',
          type: null,
          required: false,
          displayOnlyOnCorp: false,
          displayOnCorp: false,
          bulkEditable: false,
          displayVertical: ['MF', 'SS', 'SL'],
          label: 'A field label with multiple options',
          settings: {
            options: [
              { text: 'Trendy', value: 'trendy' },
              { text: 'Traditional', value: 'traditional' },
              { text: 'Warm', value: 'warm' },
              { text: 'Inviting', value: 'inviting' },
              { text: 'Playful', value: 'playful' },
              { text: 'Edgy', value: 'edgy' },
              { text: 'Authoritative', value: 'authoritative' },
              { text: 'Polished', value: 'polished' },
              { text: 'Irreverent', value: 'irreverent' },
              { text: 'Upbeat', value: 'upbeat' },
              { text: 'Straightforward', value: 'straightforward' },
              { text: 'Casual', value: 'casual' },
              { text: 'Other', value: 'other' }
            ]
          },
          description: 'A description field that appears in a popover.',
          validation: {},
          placeholder: null
        }
      }
    },
    fieldData: {
      type: Object,
      default () {
        return {
          trendy: true,
          playful: true
        }
      }
    }
  },
  data () {
    return {
      localData: [],
      other: ''
    }
  },
  // computed: {
  //   totalSelected () {
  //     return [...this.fieldData, this.other].filter(i => i !== 'other')
  //   }
  // },
  methods: {
    onChange (fieldValue, checked) {
      if (checked) {
        this.localData.push(fieldValue)
      } else {
        const i = this.localData.findIndex(l => l === fieldValue)
        this.localData.splice(i, 1)
      }
      this.$emit('change', [...this.localData, this.other].filter(l => l !== 'other'))
    },
    onInput (evt) {
      this.other = evt
      this.$emit('input', [...this.localData, this.other].filter(l => l !== 'other'))
    }
  }
}
</script>

<style>

</style>
