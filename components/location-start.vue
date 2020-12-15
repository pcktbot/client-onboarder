<template>
  <div class="p-5">
    <b-card border-variant="gray-20" class="soft-shadow py-4">
      <h1>
        Location Introduction
      </h1>
      <p class="my-4">
        G5 has gathered some information from your existing location's website. You can either prepopulate fields with the data we collected or start entering location data from scratch.
      </p>
      <b-card
        bg-variant="tertiary-20"
        border-variant="tertiary-20"
        body-class="d-flex justify-content-between px-3 py-4"
        class="mb-2"
      >
        <span class="text-uppercase font-weight-bold">
          Start {{ useCollected ? 'with collected location data' : 'from scratch' }}
        </span>
        <b-form-checkbox
          v-model="useCollected"
          switch
          size="lg"
          @change="$emit('toggle-use-existing', $event)"
        />
      </b-card>
      <p class="my-4">
        This location already has most the information we need. You could get it over the finish line in 25 mins.
      </p>
      <b-card
        bg-variant="secondary-10"
        border-variant="secondary-10"
        body-class="d-flex justify-content-between px-3 py-4"
        class="mb-2"
      >
        <b-input-group class="w-75">
          <b-input-group-prepend class="font-weight-bold text-uppercase text-secondary-80 align-items-center px-2 d-flex">
            You have assigned this location to
          </b-input-group-prepend>
          <b-form-select />
        </b-input-group>
        <b-btn>
          <b-icon-envelope />
          Reminder
        </b-btn>
      </b-card>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    useCollected: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>

</style>
