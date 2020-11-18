<template>
  <div class="content">
    <primary-nav />
    <article class="content__grid">
      <aside class="py-3">
        <div class="px-3 mb-3">
          <b-input-group v-if="userHasMultipleProjects">
            <b-form-select :options="['project-1', 'project-2']" />
            <b-input-group-btn />
          </b-input-group>
        </div>
        <location-list v-bind="{ locations }" />
      </aside>
      <section class="main-content py-5">
        <div class="px-3 selected-location-summary d-flex justify-content-between align-items-center">
          <div class="">
            Current Project details
          </div>
          <div>
            Client Details
          </div>
          <b-btn
            variant="outline-secondary"
            class="px-4 py-2 text-uppercase"
            style="border-width: 0px; border-radius: 6px; font-size: 0.9em;"
          >
            Hide Project Details
            <b-icon-chevron-down scale="0.75em" />
          </b-btn>
        </div>
        <b-card no-body header-class="border-0" class="border-0">
          <b-tabs card>
            <b-tab title="General Tab" title-link-class="py-4 px-3 text-uppercase text-muted font-weight-bold">
              <accordion-wrapper v-bind="{ categories }">
                <template v-slot:domain-information>
                  <domain-information />
                </template>
                <template v-slot:amenities>
                  <b-form-checkbox />
                </template>
                <template v-slot:assets>
                  <b-form-radio />
                </template>
              </accordion-wrapper>
            </b-tab>
            <b-tab title="Tab" lazy title-link-class="py-4 px-3 text-uppercase text-muted font-weight-bold" />
            <b-tab title="Tab (Disabled)" lazy disabled title-link-class="py-4 px-3 text-uppercase text-muted font-italic" />
          </b-tabs>
        </b-card>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userHasMultipleProjects: true,
      categories: [
        {
          label: 'Domain Information',
          description: '',
          time: '20 mins',
          isComplete: false,
          isBulk: false,
          isCorp: true,
          fields: []
        }
      ],
      locations: [
        {
          name: 'Location-1',
          status: 'Incomplete',
          data: []
        },
        { name: 'Location-2', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-4', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-6', status: 'Incomplete', data: [] },
        { name: 'Location-7', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-6', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-3', status: 'Incomplete', data: [] },
        { name: 'Location-4', status: 'Incomplete', data: [] }
      ]
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
