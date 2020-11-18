<template>
  <div class="p-5">
    <b-card border-variant="gray-10" class="soft-shadow py-4">
      <h1>
        Location Introduction
      </h1>
      <p class="my-4">
        G5 has gathered some information from your existing location's website. You can either prepopulate fields with the data we collected or start entering location data from scratch.
      </p>
      <b-card
        bg-variant="gray-10"
        border-variant="gray-10"
        body-class="d-flex justify-content-between"
      >
        <span class="text-uppercase font-weight-bold">
          Start with collected location data
        </span>
        <b-form-checkbox
          :checked="useCollected"
          switch
          size="lg"
          @change="$emit('toggle-use-existing', $event)"
        />
      </b-card>
      <b-card>
        You have assigned this location to ___________________.
        <b-btn>
          <b-icon-envelope />
          Send them a reminder.
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
