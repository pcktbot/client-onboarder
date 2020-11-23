<template>
  <b-container fluid>
    <b-row class="my-3">
      <b-col>
        <b-card class="soft-shadow">
          <b-card title="My Company Name" border-variant="secondary-10">
            Branding!
          </b-card>
          <b-card-group deck>
            <b-card
              bg-variant="secondary-10"
              border-variant="secondary-10"
            >
              <project-summary>
                <template v-slot:cta>
                  <b-btn variant="outline-primary-70" block>
                    Make this Project Active
                  </b-btn>
                </template>
              </project-summary>
            </b-card>
            <b-card
              bg-variant="secondary-10"
              border-variant="secondary-10"
            >
              <project-summary />
            </b-card>
          </b-card-group>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="my-5">
      <b-col>
        <b-card class="soft-shadow">
          Location Summaries
          <b-table :items="locations" outlined small />
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
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
