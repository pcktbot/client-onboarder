<template>
  <div class="project bg-white">
    <div class="project__progress">
      <b-progress :max="100" height="2em" class="rounded-0">
        <b-progress-bar :value="project.progress" :variant="setVariant(project.progress)" />
      </b-progress>
    </div>
    <div class="project__header">
      <h2 class="mb-0">
        {{ project.name }}
      </h2>
      <p class="text-uppercase small text-muted mb-0">
        Go-Live: {{ project.estGoLiveDate }}
      </p>
      <b-badge>
        {{ project.status }}
      </b-badge>
      <b-badge variant="gray-20">
        <b-icon-building />
        {{ project.locations.length }} Locations
      </b-badge>
    </div>
    <div>
      <b-table
        :fields="fields"
        :items="project.locations"
        sticky-header
        head-variant="light"
        small
        striped
        outlined
      >
        <template v-slot:cell(name)="{ item }">
          <div class="d-flex align-items-center">
            <b-btn
              pill
              size="sm"
              variant="gray-20"
              class="mr-2"
            >
              <b-icon-pencil-fill />
            </b-btn>
            {{ item.name }}
          </div>
        </template>
        <template v-slot:cell(progress)="{ item }">
          <b-progress :max="100">
            <b-progress-bar :value="item.progress" :variant="setVariant(item.progress)" />
          </b-progress>
        </template>
      </b-table>
    </div>
    <b-btn-group size="sm" class="w-100 rounded-0">
      <b-btn variant="outline-secondary">
        <b-icon-pencil-fill />
        Manage Project
      </b-btn>
      <b-btn variant="outline-secondary">
        <b-icon-envelope-fill />
        Project Manager
      </b-btn>
      <b-btn>
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
          name: 'ADD-Test-Project',
          status: 'in-progress',
          contractDate: '2021-02-01',
          estGoLiveDate: '2022-01-31',
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
      ]
    }
  },
  methods: {
    setVariant(progress) {
      return progress < 30
        ? 'error-70'
        : progress < 40
          ? 'error'
          : progress < 70
            ? 'warning-60'
            : 'success'
    }
  }
}
</script>

<style lang="scss">
.v-middle { vertical-align: middle !important; }
.project {
  position: relative;
  min-width: 400px;
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
    border: 2px solid #c1c1c1;
    border-radius: 6px;
    z-index: 2;
    box-shadow: 0 2px 10px rgba(10, 10, 10, 0.2);
  }
  &__progress {
    border: 1px solid #c1c1c1;
    position: absolute;
    top: 0;
    left: -2px;
    width: calc(100% + 4px);
    overflow: hidden;
    border-radius: 5px 5px 0 0;
    transform: translateY(-100%);
    // z-index: 1;
  }
}
</style>
