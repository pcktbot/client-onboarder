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
                <div v-else>
                  Please select a location to get started.
                </div>
              </b-tab>
              <b-tab title="Upload Assets" title-link-class="p-4 text-uppercase text-muted font-italic">
                <b-btn
                  class="px-4 py-3"
                  @click="openCldWidget"
                >
                  <b-icon-cloud-upload-fill />
                  Upload
                </b-btn>
                <!-- <cld-assets /> -->
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
export default {
  head () {
    return {
      script: [{ src: 'https://widget.cloudinary.com/v2.0/global/all.js' }]
    }
  },
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
  }),
  methods: {
    createCldWidget () {
      const newWidget = cloudinary.createUploadWidget({
        cloudName: 'stratypus',
        uploadPreset: 'qwdptiki',
        showAdvancedOptions: true,
        cropping: true,
        multiple: true,
        maxFiles: 10,
        styles: {
          palette: {
            window: "#dfe7ed",
            windowBorder: "#63798a",
            tabIcon: "#0078FF",
            menuIcons: "#6989b0",
            textDark: "#000000",
            textLight: "#FFFFFF",
            link: "#2c8081",
            action: "#2c8081",
            inactiveTabIcon: "#ababab",
            error: "#be2350",
            inProgress: "#e2b632",
            complete: "#006b2a",
            sourceBg: "#E4EBF1"
          },
          fonts: {
            default: {
                active: true
            }
          }
        }
      },
      (err, res) => {
        if (!err && res && res.event === 'success') {
          this.$emit('success', res)
        }
      })
      return newWidget
    },
    openCldWidget () {
      const widget = this.createCldWidget()
      widget.open()
    }
  }
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
