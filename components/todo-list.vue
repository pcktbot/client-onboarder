<template>
  <div
    class="p-3 rounded mb-3"
    style="border: 1px solid #c1c1c1; border-radius: 10px;"
  >
    <div
      v-for="(item, i) in items"
      :key="`${field.dataKey}-${i}`"
      class="mb-3"
    >
      <b-input-group>
        <b-form-input
          :value="item"
          @input="onInput($event, i)"
        />
        <b-input-group-append>
          <b-btn
            variant="error-30"
            @click="remove(i)"
          >
            <b-icon-trash />
          </b-btn>
        </b-input-group-append>
      </b-input-group>
    </div>
    <b-btn
      class="px-3 py-2 text-uppercase font-weight-bold"
      @click="add"
    >
      <b-icon-plus />
      Add
    </b-btn>
  </div>
</template>

<script>
export default {
  props: {
    field: {
      type: Object,
      default () {
        return {
          dataKey: 'todo-list-field'
        }
      }
    },
    items: {
      type: Array,
      default () {
        return ['']
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    onInput (val, index) {
      const copy = [...this.items]
      copy[index] = val
      this.$emit('change', { key: this.field, val: copy })
    },
    add () {
      const val = [...this.items, '']
      this.$emit('change', { key: this.field, val })
    },
    remove (i) {
      const val = [...this.items]
      val.splice(i, 1)
      this.$emit('change', { key: this.field, val })
    }
  }
}
</script>

<style>

</style>
