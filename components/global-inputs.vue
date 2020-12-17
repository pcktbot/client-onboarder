<template>
  <div class="global m-4 p-4 d-flex justify-content-between align-items-center bg-secondary-10">
    <b-input-group>
      <b-form-checkbox
        :checked="showRequiredOnly"
        switch
        class="global-checkbox font-weight-bold text-gray-60 text-uppercase"
        @change="toggleRequiredOnly"
      />
      <b-input-group-append class="text-uppercase text-secondary-60 font-weight-bold">
        {{ showRequiredOnly ? 'Required-Only' : 'All Fields' }}
      </b-input-group-append>
    </b-input-group>
    <b-input-group>
      <b-input-group-prepend class="d-flex align-items-center px-2 text-uppercase font-weight-bold text-secondary-60">
        I only have
      </b-input-group-prepend>
      <b-form-select :value="'a Breather, 10 mins'" :options="['a Breather, 10 mins', 'a Lunch Break, 30 mins', 'an Afternoon, 1 hr']" />
    </b-input-group>
  </div>
</template>

<script>
export default {
  props: {
    showRequiredOnly: Boolean
  },
  methods: {
    toggleRequiredOnly (val) {
      this.showRequiredOnly = !this.showRequiredOnly
      this.$emit('toggle-required-only', val)
    }
  }
}
</script>

<style lang="scss">
.global {
  border-radius: 10px;
}
.global-checkbox {
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
    // background-color: #e2eeef !important;
    background-color: white !important;
  }
}
</style>
