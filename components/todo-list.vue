<template>
  <div
    class="p-3 rounded mb-3"
    style="border: 2px solid #c1c1c1; border-radius: 10px;"
  >
    <div
      v-for="(item, i) in items"
      :key="`${field.dataKey}-${i}`"
      class="mb-3"
    >
      <b-input-group>
        <b-form-input
          :value="items[i]"
          @input="update(i, $event)"
        />
        <b-input-group-append>
          <b-btn
            @click="remove(i)"
          >
            <b-icon-trash />
          </b-btn>
        </b-input-group-append>
      </b-input-group>
    </div>
    <b-btn
      @click="add"
    >
      Add
    </b-btn>
    {{ items }}
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
      defaultItem () {
        return ''
      }
    }
  },
  methods: {
    update (i, evt) {
      this.items[i] = evt
      this.$emit('input', i, this.field.dataKey, evt)
    },
    add () {
      this.items.push(this.defaultItem())
    },
    remove (i) {
      this.items.splice(i, 1)
    }
  }
}
</script>

<style>

</style>
