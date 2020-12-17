<template>
  <div class="p-4">
    <b-row
      v-for="(user, i) in users"
      :key="`user-row-${i}`"
      class="p-3 rounded mb-3"
      style="border: 1px solid #c1c1c1; border-radius: 10px;"
    >
      <b-col cols="5">
        <div class="d-flex">
          <b-form-group
            label="First Name"
            label-class="text-uppercase font-weight-bold text-gray-30"
            class="mr-2"
          >
            <b-form-input
              :value="user.first"
            />
          </b-form-group>
          <b-form-group
            label="Last Name"
            label-class="text-uppercase font-weight-bold text-gray-30"
          >
            <b-form-input
              :value="user.last"
            />
          </b-form-group>
        </div>
        <b-form-group
          label="Email"
          label-class="text-uppercase font-weight-bold text-gray-30"
        >
          <b-form-input
            :value="user.email"
          />
        </b-form-group>
      </b-col>
      <b-col cols="5">
        <b-form-group
          label="Locations"
          label-class="text-uppercase font-weight-bold text-gray-30"
        >
        <div class="bg-gray-20 px-3 py-1 rounded mb-2">
          <b-form-checkbox
            v-model="user.isGlobal"
            switch
            class="text-gray-60 switch-checkbox"
          >
            {{ user.isGlobal ? 'All Locations' : 'Specific Locations' }}
          </b-form-checkbox>
        </div>
          <vue-multiselect
            v-if="!user.isGlobal"
            :options="user.locations"
          />
        </b-form-group>
      </b-col>
      <b-col class="align-self-end text-center">
        <b-btn class="py-2 px-3">
          <save-icon :size="`1.2em`" />
          Save
        </b-btn>
        <b-btn
          variant="transparent"
          class="text-secondary py-2 px-3"
          @click="remove(i)"
        >
          <b-icon-trash />
          Remove
        </b-btn>
      </b-col>
    </b-row>
    <b-row>
      <b-btn
        variant="transparent"
        class="py-2 px-3 text-secondary"
        @click="add"
      >
        <b-icon-plus-circle />
        Add User
      </b-btn>
    </b-row>
  </div>
</template>

<script>
import VueMultiselect from 'vue-multiselect'
export default {
  components: { VueMultiselect },
  data () {
    return {
      userTemplate() {
        return {
          id: '',
          first: '',
          last: '',
          email: '',
          isGlobal: true,
          locations: []
        }
      },
      users: []
    }
  },
  methods: {
    add () {
      this.users.push(this.userTemplate())
    },
    remove (i) {
      this.users.splice(i, 1)
    }
  }
}
</script>

<style lang="scss">
.switch-checkbox {
  & .custom-control-input:checked ~ .custom-control-label::before {
    border-color: #256a6a;
    background-color: #256a6a;
  }
  & .custom-control-label::after {
    top: calc(0.25rem - 3px);
    left: calc(-2.25rem - 2px);
    width: calc(1rem + 4px);
    height: calc(1rem + 4px);
    box-shadow: 0 1px 2px rgba(10, 10, 10, 0.6);
  }
  & .custom-control-input:checked ~ .custom-control-label::after {
    background-color: #e2eeef !important;
  }
}
</style>
