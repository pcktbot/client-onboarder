<template>
  <div>
    <b-card-group deck>
      <b-card
        v-for="project in projects"
        :key="project.id"
        bg-variant="gray-10"
        border-variant="gray-10"
      >
        <project-summary :project="project" />
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      projects: [
        {
          id: 'test-project',
          projectName: 'ADD-Test-Project',
          status: 'in-progress',
          contractDate: '2021-02-01',
          estGoLive: '2022-01-31',
          progress: 95,
          locations: [
            { id: 'loc-1', name: 'Location 1', status: 'incomplete', progress: 50 },
            { id: 'loc-2', name: 'Location 2', status: 'incomplete', progress: 70 },
            { id: 'loc-3', name: 'Location 3', status: 'incomplete', progress: 30 },
            { id: 'loc-4', name: 'Location 4', status: 'incomplete', progress: 20 }
          ]
        },
        {
          id: 'test-project',
          projectName: 'ADD-Another-Test-Project',
          status: 'in-progress',
          contractDate: '2021-02-01',
          estGoLive: '2022-01-31',
          progress: 30,
          locations: [
            { id: 'loc-1', name: 'Location 1', status: 'incomplete', progress: 50 },
            { id: 'loc-2', name: 'Location 2', status: 'incomplete', progress: 70 },
            { id: 'loc-3', name: 'Location 3', status: 'incomplete', progress: 30 },
            { id: 'loc-4', name: 'Location 4', status: 'incomplete', progress: 20 },
            { id: 'loc-5', name: 'Location 5', status: 'incomplete', progress: 20 },
            { id: 'loc-6', name: 'Location 6', status: 'incomplete', progress: 20 },
            { id: 'loc-7', name: 'Location 7', status: 'incomplete', progress: 20 },
            { id: 'loc-8', name: 'Location 8', status: 'incomplete', progress: 20 }
          ]
        }
      ],
      currentProject: 'project-1',
      myProjects: ['project-1', 'project-2'],
      locations: [
        {
          name: 'demo location',
          address: '123 Street St. City, ST 97701',
          complete: 4,
          incomplete: 8
        },
        {
          name: 'demo location',
          address: '123 Street St. City, ST 97701',
          complete: 4,
          incomplete: 8
        },
        {
          name: 'demo location',
          address: '123 Street St. City, ST 97701',
          complete: 4,
          incomplete: 8
        },
        {
          name: 'demo location',
          address: '123 Street St. City, ST 97701',
          complete: 4,
          incomplete: 8
        },
        {
          name: 'demo location',
          address: '123 Street St. City, ST 97701',
          complete: 4,
          incomplete: 8
        },
        {
          name: 'demo location',
          address: '123 Street St. City, ST 97701',
          complete: 4,
          incomplete: 8
        },
        {
          name: 'demo location',
          address: '123 Street St. City, ST 97701',
          complete: 4,
          incomplete: 8
        },
        {
          name: 'demo location',
          address: '123 Street St. City, ST 97701',
          complete: 4,
          incomplete: 8
        }
      ]
    }
  }
}
</script>

<style>

</style>
