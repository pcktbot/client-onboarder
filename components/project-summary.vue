<template>
  <div class="project bg-white">
    <div class="project__progress">
      <b-progress :max="100" height="2em" class="rounded-0 p-1">
        <b-progress-bar
          :value="project.progress"
          variant="primary-70"
          style="border-radius: 25px;"
        />
      </b-progress>
    </div>
    <div class="project__header">
      <h2 class="mb-0">
        {{ project.projectName }}
      </h2>
      <p class="text-uppercase small text-muted mb-0">
        Go-Live: {{ project.estGoLive }}
      </p>
      <b-badge>
        {{ project.status }}
      </b-badge>
      <b-badge variant="gray-20">
        <b-icon-building />
        {{ project.locationCount }} Locations
      </b-badge>
    </div>
    <div>
      <b-table
        :fields="fields"
        :items="locations"
        sticky-header
        thead-class="text-uppercase font-weight-bold text-tertiary-60"
        head-row-variant="gray-10"
        small
        striped
        borderless
      >
        <template v-slot:cell(name)="{ item }">
          <div class="d-flex align-items-center">
            <b-btn
              pill
              size="sm"
              variant="transparent"
              class="mr-2 text-secondary"
            >
              <b-icon-pencil />
            </b-btn>
            {{ item.name }}
          </div>
        </template>
        <template v-slot:cell(progress)="{ item }">
          <b-progress :max="100" style="border-radius: 25px;">
            <b-progress-bar :value="item.progress" :variant="setVariant(item.progress)" />
          </b-progress>
        </template>
      </b-table>
    </div>
    <b-btn-group size="sm" class="w-100 rounded-0">
      <b-btn
        variant="secondary"
        class="py-2"
        @click="$store.dispatch('projects/setSelectedProject', project.projectId)"
      >
        <b-icon-pencil />
        Manage Project
      </b-btn>
      <b-btn variant="transparent" class="text-secondary py-2">
        <b-icon-envelope-fill />
        Project Manager
      </b-btn>
      <b-btn variant="transparent" class="text-secondary py-2">
        <b-icon-envelope-fill />
        Team Members
      </b-btn>
    </b-btn-group>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default () {
        return {
          id: 'test-project',
          projectName: 'ADD-Test-Project',
          projectId: '',
          clientName: '',
          clientId: '',
          status: 'in-progress',
          contractDate: '2021-02-01',
          estGoLive: '2022-01-31',
          progress: 60,
          locations: [
            { id: 'loc-1', name: 'Location 1', status: 'incomplete', progress: 50 },
            { id: 'loc-2', name: 'Location 2', status: 'incomplete', progress: 70 },
            { id: 'loc-3', name: 'Location 3', status: 'incomplete', progress: 30 },
            { id: 'loc-4', name: 'Location 4', status: 'incomplete', progress: 20 }
          ]
        }
      }
    }
  },
  data () {
    return {
      fields: [
        { key: 'name', sortable: true },
        { key: 'status', sortable: true },
        { key: 'progress', sortable: true, tdClass: 'v-middle' }
      ],
      locations: [
        { id: 'loc-1', name: 'Location 1', status: 'incomplete', progress: 50 },
        { id: 'loc-2', name: 'Location 2', status: 'incomplete', progress: 70 },
        { id: 'loc-3', name: 'Location 3', status: 'incomplete', progress: 30 },
        { id: 'loc-4', name: 'Location 4', status: 'incomplete', progress: 20 }
      ]
    }
  },
  methods: {
    setVariant (progress) {
      return progress < 30
        ? 'error-70'
        : progress < 40
          ? 'error'
          : progress < 70
            ? 'warning-60'
            : 'success-70'
    }
  }
}
</script>

<style lang="scss">
.v-middle { vertical-align: middle !important; }
.project {
  position: relative;
  // min-width: 400px;
  border: 1px solid #c1c1c1;
  border-radius: 0 0 5px 5px;
  // box-shadow: 0 10px 20px rgba(10, 10, 10, 0.4);
  &__header {
    position: relative;
    padding: 1.25em;
    width: 95%;
    margin: 0 auto;
    transform: translateY(-10px);
    background-color: white;
    border: 0.5px solid #c1c1c1;
    border-radius: 10px;
    z-index: 2;
    // box-shadow: 0 2px 10px rgba(10, 10, 10, 0.2);
  }
  &__progress {
    border: 1px solid #c1c1c1;
    position: absolute;
    top: 0;
    left: -1px;
    width: calc(100% + 2px);
    overflow: hidden;
    border-radius: 5px 5px 0 0;
    transform: translateY(-100%);
    // z-index: 1;
  }
}
</style>
