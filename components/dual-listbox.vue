<template>
  <b-container fluid>
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
        >
          <div
            v-for="element in filteredList"
            :key="element.value"
            class="bg-white px-3 py-2 mb-2 d-flex align-items-center justify-content-between font-weight-bold"
            style="cursor: grab; border-radius: 4px; box-shadow: 0 1px 1px #a8a8a8; border: 1px solid #a8a8a8;"
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
          v-model="myList"
          :class="[{ 'is-dragging': isDragging }]"
          class="dragArea p-2"
          style="min-height: 400px; background-color: #d1d1d1; border-radius: 4px;"
          group="amenities"
        >
          <div
            v-for="element in myList"
            :key="`${element.value}-${element.id}`"
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
    },
    fieldData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      idGlobal: 0,
      isDragging: false,
      search: '',
      addInput: ''
    }
  },
  computed: {
    myList: {
      get () {
        return this.fieldData
      },
      set (value) {
        this.$emit('change', { val: value, key: this.field.dataKey })
      }
    },
    filteredList () {
      return this.field.settings.options.filter((item) => {
        return item.text.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  mounted () {
    this.idGlobal = this.fieldData.length
  },
  methods: {
    onEnd (evt) {
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
      const item = {
        text: this.addInput,
        value: this.camelize(this.addInput),
        id
      }
      const val = [...this.myList, item]
      this.$emit('change', { val, key: this.field.dataKey })
      this.addInput = ''
    },
    removeAt (id) {
      const index = this.myList.findIndex(item => item.id === id)
      const val = [...this.myList]
      val.splice(index, 1)
      this.$emit('change', { val, key: this.field.dataKey })
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
