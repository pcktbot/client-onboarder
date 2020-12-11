<template>
  <div class="border border-secondary-30 m-4 p-3 d-flex justify-content-between align-items-center">
    <b-form-checkbox switch class="font-weight-bold text-secondary-60 text-uppercase">
      Required-Only
    </b-form-checkbox>
    <b-input-group class="w-50">
      <b-input-group-prepend class="d-flex align-items-center px-2 text-uppercase font-weight-bold text-secondary-60">
        I only have
      </b-input-group-prepend>
      <b-form-select :value="'a Breather, 10 mins'" :options="['a Breather, 10 mins', 'a Lunch Break, 30 mins', 'an Afternoon, 1 hr']" />
    </b-input-group>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>