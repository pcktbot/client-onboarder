import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: mapState({
    locations: state => state.locations.locations,
    selected: state => state.locations.selected,
    projectId: state => state.projects.selectedProject.projectId
  }),
  methods: {
    ...mapActions({
      updateLocationProp: 'locations/updateLocationProp',
      updateLocation: 'locations/updateLocation'
    }),
    locationById (locationId) {
      return this.locations.length > 0
        ? this.locations.filter(location => location.locationId === locationId)[0]
        : {}
    },
    getLocationIndex (id) {
      return this.locations
        .findIndex(location => location.locationId === id)
    },
    onUpdate ({ locIdx, key, val }) {
      this.updateLocationProp({ locIdx, key, val })
    },
    async saveLocation (projectId, locationId, body) {
      await this.$axios
        .$put(`/api/v1/projects/${projectId}/locations/${locationId}`, body)
    },
    async saveLocations (projectId, locations) {
      await this.$axios
        .$put(`/api/v1/projects/${projectId}/locations`, locations)
    }
  }
}
