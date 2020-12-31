<template>
  <div>
    <b-form-group
      label-class="text-uppercase text-muted font-weight-bold"
      class="mr-2"
      style="flex: 1 1 auto;"
    >
      <template v-slot:label>
        {{ label }}
        <b-icon-info-circle
          v-if="description"
          v-b-tooltip.click.v-tertiary-70="description"
          variant="secondary-30"
          style="cursor: pointer;"
        />
      </template>
      <b-form-checkbox-group
        v-model="fieldData"
        :options="settings.options"
        switches
        stacked
        style="display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 0.5em 0;"
        class="mt-3 ml-3"
      />
      <b-form-input
        v-if="fieldData.includes('other')"
        v-model.trim="other"
        style="max-width: 50%;"
      />
    </b-form-group>
    {{ fieldData }}, {{ other }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      fieldData: [],
      other: null,
      dataKey: 'copy_wants',
      component: 'checkbox-group-expanded',
      type: null,
      required: false,
      displayOnlyOnCorp: false,
      displayOnCorp: false,
      bulkEditable: false,
      isHub: false,
      displayVertical: ['MF', 'SS', 'SL'],
      label: 'What feel do you want your copy to have?',
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
      description: null,
      validation: null,
      placeholder: null
    }
  }
}
</script>

<style>

</style>
