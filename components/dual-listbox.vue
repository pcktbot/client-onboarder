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
      <b-btn>
        <b-icon-x />
      </b-btn>
      <b-btn>
        <b-icon-plus />
      </b-btn>
      <v-multiselect-listbox
        ref="testRef"
        :options="settings.options"
        :reduce-display-property="(option) => option.text"
        :reduce-value-property="(option) => option.value"
        :show-select-all-buttons="false"
        no-options-found-text="Not found"
        no-selected-options-found-text="No selection found"
        search-input-class="dual-search-input"
      />
    </b-form-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataKey: 'apartment_amenities',
      component: 'dual-listbox',
      mappedFields: [
        'apartment_amenity_1',
        'apartment_amenity_2',
        'apartment_amenity_3'
      ],
      type: null,
      required: true,
      displayOnlyOnCorp: false,
      displayOnCorp: false,
      bulkEditable: false,
      isHub: true,
      displayVertical: ['MF'],
      label: 'Apartment Amenities',
      settings: {
        options: [
          { text: 'Air Conditioning', value: 'airConditioning' },
          { text: 'Cable Included', value: 'cableIncluded' },
          { text: 'Custom Cabinetry', value: 'customCabinetry' },
          { text: 'Dishwasher', value: 'dishwasher' },
          { text: 'Energy-Efficient Appliances', value: 'energyEfficientAppliances' },
          { text: 'Fireplace', value: 'fireplace' },
          { text: 'Garages Available', value: 'garagesAvailable' },
          { text: 'Granite Counters', value: 'graniteCounters' },
          { text: 'Hardwood Flooring', value: 'hardwoodFlooring' },
          { text: 'High Ceilings', value: 'highCeilings' },
          { text: 'High Speed Internet Access', value: 'highSpeedInternet' },
          { text: 'Private Balcony', value: 'privateBalcony' },
          { text: 'Private Patio', value: 'privatePatio' },
          { text: 'Soundproof Walls', value: 'soundproofWalls' },
          { text: 'Stainless-Steel Appliances', value: 'stainlessSteelAppliances' },
          { text: 'Vaulted Ceilings', value: 'valutedCeilings' },
          { text: 'Walk-In Closets', value: 'walkInClosets' },
          { text: 'Washer/Dryer Connections', value: 'washerDryerConnections' },
          { text: 'Washer/Dryer Included', value: 'washerDryerIncluded' },
          { text: 'Wood-Style Flooring', value: 'woodStyleFlooring' }
        ]
      },
      description: null,
      validation: null,
      placeholder: null
    }
  },
  computed: {
    searchText () {
      return this.$refs.testRef.$children[0].searchText
    }
  }
}
</script>

<style lang="scss">
.dual-search-input {
  border: 2px solid #c8c8c8;
  border-radius: 10px;
  padding: 0.25em 1.5em;
}
.msl-multi-select {
  width: 100%;
  max-width: 800px;
}
.msl-searchable-list__item {
  margin: 0.5em 0.25em;
  border: 2px solid #c1c1c1;
  border-radius: 4px;
}
</style>
