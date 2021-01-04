<template>
  <b-row>
    <b-col>
      <h3>Move your Amenities</h3>
      <b-form-input
        v-model="search"
        placeholder="search..."
        type="search"
        class="mb-3"
      />
      <draggable
        :list="filteredList"
        :group="{ name: 'amenities', pull: 'clone', put: false }"
        :clone="cloneItem"
        class="dragArea list-group"
        style="max-height: 400px; overflow-y: scroll;"
        @start="isDragging = true"
        @end="onEnd"
        @change="log"
      >
        <div
          v-for="element in filteredList"
          :key="element.value"
          class="list-group-item"
          style="cursor: grab;"
        >
          {{ element.text }}
        </div>
      </draggable>
    </b-col>

    <b-col>
      <h3>Choosen Amenities</h3>
      <b-input-group class="w-100 mb-3">
        <b-input-group-prepend>
          <b-button
            variant="secondary"
            @click="addItem"
          >
            <b-icon icon="plus" />
            Add
          </b-button>
        </b-input-group-prepend>
        <b-form-input
          v-model.trim="addInput"
          class="flex-grow-1 mb-0"
          placeholder="Add additional amenities"
        />
      </b-input-group>
      <draggable
        :list="amenities"
        :class="[{ 'is-dragging': isDragging }]"
        class="dragArea p-2"
        style="min-height: 400px; background-color: #c1c1c1;"
        group="amenities"
        @change="log"
      >
        <div
          v-for="element in amenities"
          :key="element.name"
          class="bg-white px-3 py-1 mb-2 d-flex align-items-center justify-content-between"
          style="border-radius: 6px;"
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
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable
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
      return this.settings.options.filter((amenity) => {
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
  border: 4px dashed #a8a8a8;
}
</style>
