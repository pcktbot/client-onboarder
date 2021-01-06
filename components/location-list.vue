<template>
  <div>
    <div class="px-3 mb-3">
      <search-input :filter="filter" @search="filter = $event" />
    </div>
    <!-- <div class="px-3 mb-3">
      <b-input-group>
        <b-form-checkbox
          :checked="isEnabled"
          switch
          size="lg"
          @change="updateBulkMode"
        />
        <b-input-group-append class="d-flex text-gray-60 align-items-baseline mt-1 px-3">
          Update {{ isEnabled ? 'Multiple Locations' : 'Single Location' }}
        </b-input-group-append>
      </b-input-group>
    </div> -->
    <b-table
      :fields="['location', { key: 'name', tdClass: 'd-none' }]"
      :items="locations"
      :filter="filter"
      :select-mode="isEnabled ? 'multi' : 'single'"
      selectable
      sticky-header
      borderless
      style="max-height: 75vh;"
      class="p-0 m-0 border-0 hide"
      @row-selected="onLocationSelect"
    >
      <template v-slot:cell(location)="{ item }">
        <div class="px-2 d-flex justify-content-between">
          <h4 class="mb-0 text-gray-80 flex-grow-1">
            {{ item.properties.name }}
          </h4>
          <!-- <b-progress :max="100" style="max-width: 30px; width: 30px;" class="align-self-center border border-primary-30 p-1">
            <b-progress-bar :value="60" variant="primary-70" style="border-radius: 10px;" />
          </b-progress> -->
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Locations from '~/mixins/locations'
import Fields from '~/mixins/fields'
export default {
  mixins: [Locations, Fields],
  data () {
    return {
      filter: ''
    }
  },
  computed: mapState({
    projectId: state => state.projects.selectedProject.projectId,
    isEnabled: state => state.bulk.isEnabled
  }),
  methods: {
    ...mapActions({
      toggleBulkMode: 'bulk/toggleBulkMode',
      setFields: 'fields/setFields'
    }),
    onLocationSelect (selectedLocations) {
      this.updateSelectedLocations({ selectedLocations })
      // TODO need to access vertical
      this.setCategories({ vertical: 'mf', corp: false })
      if (selectedLocations.length > 0 && this.projectId) {
        this.setFields({
          projectId: this.projectId,
          locationId: selectedLocations[0].locationId
        })
      } else {
        // TODO needs to clear fields/set
      }
    },
    updateBulkMode (val) {
      this.toggleBulkMode(val)
      this.updateSelectedLocations({ selectedLocations: [] })
    }
  }
}
</script>

<style lang="scss">
.hide thead[role=rowgroup] {
  display: none;
}
.custom-switch.b-custom-control-lg .custom-control-label::after,
.input-group-lg .custom-switch .custom-control-label::after {
  top: calc( 0.3125rem - 2px);
  left: calc( -2.8125rem - 2px);
  width: calc( 1.25rem + 4px);
  height: calc( 1.25rem + 4px);
  box-shadow: 0 0 5px 0 rgba(10, 10, 10, 1);
  border-radius: 50%;
}
.table.b-table > tbody > .table-active,
.table.b-table > tbody > .table-active > th,
.table.b-table > tbody > .table-active > td {
  background-color: var(--tertiary-30);
  // background-color: #f7dddd;
  color: var(--primary);
  // color: #2d8081;
  // background-color: #4e6f96;
  box-shadow: inset 10px 0 0 0 var(--primary);
  // box-shadow: inset 10px 0 0 0 #2d8081;
  // box-shadow: inset 10px 0 0 0 #6889b0;
}
</style>
