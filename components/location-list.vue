<template>
  <div>
    <div class="px-3 mb-3">
      <search-input :filter="filter" @search="filter = $event" />
    </div>
    <div class="px-3 mb-3">
      <b-input-group>
        <b-input-group-prepend class="d-flex align-items-baseline mt-1 px-3 text-light">
          Update Multiple Locations
        </b-input-group-prepend>
        <b-form-checkbox
          v-model="multiselect"
          switch
          size="lg"
        />
      </b-input-group>
    </div>
    <b-table
      :fields="['location', { key: 'name', tdClass: 'd-none' }]"
      :items="locations"
      :filter="filter"
      :select-mode="multiselect ? 'multi' : 'single'"
      selectable
      sticky-header
      borderless
      style="max-height: 80vh;"
      class="p-0 m-0 border-0 hide"
    >
      <template v-slot:cell(location)="{ item }">
        <div class="px-3">
          <h3 class="mb-0 text-light">
            {{ item.name }}
          </h3>
          <p class="mb-0 text-muted">
            {{ item.status }}
          </p>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    locations: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      multiselect: false,
      filter: '',
      selectedLocations: []
    }
  },
  methods: {
    onLocationSelect (loc) {
      this.$emit('location-change', loc)
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
  background-color: #4e6f96;
  box-shadow: inset 10px 0 0 0 #6889b0;
}
</style>
