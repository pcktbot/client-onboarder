<template>
  <div
    class="p-3 rounded mb-3"
    style="border: 2px solid #c1c1c1; border-radius: 10px;"
  >
    <div
      v-for="(item, i) in items"
      :key="`${field}-${i}`"
      class="mb-3"
    >
      <b-input-group>
        <b-form-input
          :value="item.value"
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
      type: String,
      default: 'todo-list-field'
    },
    items: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      defaultItem () {
        return {
          value: null
        }
      },
      items: []
    }
  },
  methods: {
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
