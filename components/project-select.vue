<template>
  <div class="projects bg-tertiary-20 p-5">
    <b-form-group label="Select Project" label-class="text-uppercase text-tertiary-60 font-weight-bold" class="projects__group">
      <b-form-select
        :value="selectedProject ? selectedProject.text : null"
        :options="projects"
        class="projects__group__select"
        @change="setSelectedProject($event)"
      />
      <span class="caret">
        <b-icon-chevron-down
          variant="light"
          scale="1.5em"
          shift-h="8"
          shift-v="-6"
        />
      </span>
    </b-form-group>
    <b-btn
      block
      variant="secondary"
      class="py-3 text-uppercase font-weight-bold"
      style="font-size: 1.2em;"
      to="/"
    >
      Pick this Project
    </b-btn>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState({
      projects: state => state.projects.projects,
      selectedProject: state => state.projects.selectedProject
    })
  },
  methods: {
    ...mapActions({
      setSelectedProject: 'projects/setSelectedProject'
    })
  }
}
</script>

<style lang="scss">
.projects {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(0%, -50%);
  height: 600px;
  width: 40vw;
  border-radius: 50px 50px 50px 0;
  box-shadow: 0 0 20px rgba(10, 10, 10, 0.25);
  &__group {
    position: relative;
    font-size: 1.1em;
    &__select {
      background: none;
      background-color: white;
      border: none;
      border-radius: 10px;
      box-shadow: 0 2px 6px rgba(10, 10, 10, 0.25);
    }
    & .caret {
      pointer-events: none;
      position: absolute;
      right: 0;
      bottom: 0;
      width: 2em;
      height: 2em;
      transform: translate(-10px, -0.4em);
      background-color: #2c8082;
      z-index: 999;
      border-radius: 10px;
    }
  }
}
</style>
