<template>
  <div class="landing bg-white">
    <primary-nav :show-branding="true">
      <user-dropdown />
    </primary-nav>
    <div class="landing__content bg-white d-flex">
      <b-container class="py-4">
        <b-row class="my-3">
          <b-col
            v-for="project in projects"
            :key="project.id"
            cols="12"
            lg="6"
            class="py-4"
          >
            <project-summary :project="{ ...project, progress: 40 }" />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  async fetch ({ store }) {
    try {
      // will need to hydrate store with user
      // to initialize projects available to them
      await store.dispatch('projects/init')
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },
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
.landing {
  position: relative;
  &__content {
    position: absolute;
    top: 65px;
    height: calc(100vh - 65px);
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
}
</style>
