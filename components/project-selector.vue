<template>
  <b-input-group v-if="userHasMultipleProjects">
    <b-form-select
      :value="currentProject"
      :options="['project-1', 'project-2']"
      style="background: transparent; border-width: 1px; border-color: #339698; border-radius: 10px 0 0 10px`;"
    />
    <b-input-group-append>
      <b-btn variant="outline-secondary">
        Switch Project
      </b-btn>
    </b-input-group-append>
  </b-input-group>
</template>

<script>
export default {
  props: {
    currentProject: {
      type: String,
      default: 'project-1'
    },
    userHasMultipleProjects: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>

</style>
