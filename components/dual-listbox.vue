<template>
  <b-container fluid>
    <!-- <b-row style="max-width: 1200px;">
      <b-col cols="12">
        <h3>
          Pick your Amenities
        </h3>
      </b-col>
    </b-row> -->
    <b-row style="max-width: 1200px; max-height: 800px;">
      <b-col cols="6">
        <b-input-group class="mb-2">
          <b-input-group-prepend class="d-flex align-items-center justify-content-center px-3">
            <b-icon-search variant="gray" />
          </b-input-group-prepend>
          <b-form-input
            v-model="search"
            placeholder="search..."
            type="search"
          />
        </b-input-group>
        <draggable
          :list="filteredList"
          :group="{ name: 'amenities', pull: 'clone', put: false }"
          :clone="cloneItem"
          class="dragArea p-2"
          style="max-height: 400px; overflow-y: scroll;"
          @start="isDragging = true"
          @end="onEnd"
          @change="log"
        >
          <div
            v-for="element in filteredList"
            :key="element.value"
            class="bg-white px-3 py-2 mb-2 d-flex align-items-center justify-content-between font-weight-bold"
            style="cursor: grab; border-radius: 4px; box-shadow: 0 0 5px #d8d8d8; border: 1px solid #a8a8a8;"
          >
            {{ element.text }}
          </div>
        </draggable>
      </b-col>
      <b-col cols="6">
        <b-input-group class="w-100 mb-3">
          <b-form-input
            v-model.trim="addInput"
            class="flex-grow-1 mb-0"
            placeholder="Add additional amenities"
          />
          <b-input-group-append>
            <b-button
              variant="secondary"
              class="px-4"
              @click="addItem"
            >
              <b-icon icon="plus" />
              Add
            </b-button>
          </b-input-group-append>
        </b-input-group>
        <draggable
          :list="amenities"
          :class="[{ 'is-dragging': isDragging }]"
          class="dragArea p-2"
          style="min-height: 400px; background-color: #d1d1d1; border-radius: 4px;"
          group="amenities"
          @change="log"
        >
          <div
            v-for="element in amenities"
            :key="element.name"
            class="bg-white px-3 py-2 mb-2 d-flex align-items-center justify-content-between font-weight-bold"
            style="border-radius: 4px; box-shadow: 0 1px 2px #a8a8a8;"
          >
            {{ element.text }}
            <span
              class="m-0 p-0"
              onmouseover=""
              style="cursor: pointer;"
              @click="removeAt(element.id)"
            >
              <b-img
                width="25"
                height="25"
                src="/red-x.svg"
                style="vertical-align: middle;"
              />
            </span>
          </div>
        </draggable>
      </b-col>
    </b-row>
</b-container>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable
  },
  props: {
    field: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      idGlobal: 0,
      isDragging: false,
      search: '',
      addInput: '',
      amenities: [],
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
    filteredList () {
      return this.field.settings.options.filter((amenity) => {
        return amenity.text.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  mounted () {
    this.idGlobal = this.amenities.length
  },
  methods: {
    onEnd () {
      this.isDragging = false
    },
    cloneItem ({ text }) {
      return {
        id: this.idGlobal++,
        text,
        value: this.camelize(text)
      }
    },
    addItem () {
      const id = this.idGlobal++
      this.amenities.push({ text: this.addInput, value: this.camelize(this.addInput), id })
      this.addInput = ''
    },
    removeAt (id) {
      const index = this.amenities.findIndex(amenity => amenity.id === id)
      this.amenities.splice(index, 1)
    },
    log (evt) {
      window.console.log(evt)
    },
    camelize (str) {
      return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        return index === 0 ? word.toLowerCase() : word.toUpperCase()
      }).replace(/\s+/g, '')
    }
  }
}
</script>

<style lang="scss">
.is-dragging {
  border: 2px dashed #a8a8a8;
}
</style>
