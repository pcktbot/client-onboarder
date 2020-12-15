<template>
  <div class="content">
    <primary-nav>
      <user-dropdown />
    </primary-nav>
    <article class="content__grid">
      <aside class="py-3">
        <location-list />
      </aside>
      <section class="main-content py-2">
        <project-details />
        <transition mode="out-in" name="fade">
          <bulk-edit-wrapper v-if="bulkIsEnabled">
            <accordion-wrapper v-if="selectedLocations.length > 0" />
            <!-- Placeholder for logic until we have a better way-->
            <div v-else>
              Select locations to bulk update
            </div>
            <!-- Placeholder for logic until we have a better way-->
          </bulk-edit-wrapper>
          <b-card v-else no-body header-class="border-0" class="border-0">
            <b-tabs v-model="currentTab" card>
              <b-tab title="My Projects" title-link-class="p-4 text-uppercase text-muted font-weight-bold">
                <welcome-start />
              </b-tab>
              <b-tab title="Location Start" title-link-class="p-4 text-uppercase text-muted font-weight-bold">
                <location-start />
              </b-tab>
              <b-tab title="Location Details" title-link-class="p-4 text-uppercase text-muted font-weight-bold">
                <global-inputs />
                <!-- wait to enable accordion wrapper until location is selected then pass in location in props -->
                <accordion-wrapper v-if="selectedLocations.length === 1" />
                <!-- Placeholder for logic until we have a better way-->
                <div v-else class="text-center">
                  Select a location first.
                </div>
                <!-- Placeholder for logic until we have a better way-->
              </b-tab>
              <b-tab lazy title-link-class="p-4 text-uppercase text-muted">
                <template v-slot:title>
                  <span>
                    <b-icon-people-fill />
                    Manage Users
                  </span>
                </template>
                <user-management />
              </b-tab>
              <!-- <b-tab title="6. Tab (Disabled)" lazy disabled title-link-class="p-4 text-uppercase text-muted font-italic" /> -->
            </b-tabs>
          </b-card>
        </transition>
      </section>
    </article>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Locations from '~/mixins/locations'
import Fields from '~/mixins/fields'
export default {
  mixins: [Locations, Fields],
  async fetch ({ store }) {
    try {
      // projectId will be extracted from the url params once we make the page dynamic
      let projectId = store.state.projects.selectedProject
        ? store.state.projects.selectedProject.projectId
        : null
      // temporary if statement to add a selected projectId while in dev if its not already selected
      if (!projectId) {
        await store.dispatch('projects/init')
        projectId = store.state.projects.projects[0].projectId
        await store.dispatch('projects/setSelectedProject', projectId)
      }
      await store.dispatch('locations/init', projectId)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },
  data () {
    return {
      currentTab: 0
    }
  },
  computed: mapState({
    bulkIsEnabled: state => state.bulk.isEnabled
  })
}
</script>

<style lang="scss">
.content {
  position: relative;
  &__grid {
    position: absolute;
    top: 65px;
    height: calc(100vh - 65px);
    width: 100%;
    display: grid;
    grid-template-columns: minmax(min-content, 300px) auto;
    overflow-y: hidden;
  }
}
.main-content {
  background: white;
  min-height: 100%;
  border-radius: 50px 0 0 0;
  overflow-y: scroll;
  box-shadow: -2px 0 20px rgba(12, 35, 64, 0.5);
}
</style>
