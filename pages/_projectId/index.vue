<template>
  <div class="content">
    <primary-nav>
      <user-dropdown />
    </primary-nav>
    <article :class="['content__grid']">
      <aside class="py-3">
        <location-list />
      </aside>
      <section class="main-content py-2">
        <project-details />
        <transition mode="out-in" name="fade">
          <bulk-edit-wrapper v-if="bulkIsEnabled" />
          <b-card v-else no-body header-class="border-0" class="border-0">
            <b-tabs v-model="currentTab" card>
              <b-tab title="Edit Location" title-link-class="p-4 text-uppercase text-muted font-weight-bold">
                <accordion-wrapper v-if="categories.length > 0" />
              </b-tab>
              <b-tab title="Upload Assets" disabled title-link-class="p-4 text-uppercase text-muted font-italic">
                onboarding/
              </b-tab>
              <b-tab title="All Fields" title-link-class="p-4 text-uppercase text-muted font-weight-bold" lazy>
                <flatten-test :items="fields" />
              </b-tab>
            </b-tabs>
          </b-card>
        </transition>
      </section>
    </article>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LocationsMixin from '~/mixins/locations'
import FormUtil from '~/mixins/form-util'
export default {
  mixins: [LocationsMixin, FormUtil],
  async fetch ({ store, params }) {
    const { projectId } = params
    await store.dispatch('projects/init')
    await store.dispatch('projects/setSelectedProject', projectId)
    await store.dispatch('locations/init', projectId)
  },
  data () {
    return {
      currentTab: 0
    }
  },
  computed: mapState({
    bulkIsEnabled: state => state.bulk.isEnabled,
    categories: state => state.fields.categories,
    fields: state => state.fields.fields
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
    &.is-tidy {
      grid-template-columns: 75px auto;
    }
  }
}
.main-content {
  background: white;
  min-height: 100%;
  border-radius: 50px 0 0 0;
  overflow-y: scroll;
  // box-shadow: -1px -1px 0 rgba(12, 35, 64, 0.25);
  box-shadow: -2px 0 20px rgba(12, 35, 64, 0.25);
}
</style>
