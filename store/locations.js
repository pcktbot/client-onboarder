export const state = () => ({
  locations: [],
  selectedLocations: []
})
export const getters = {}

export const actions = {
  async init ({ commit }, projectId) {
    try {
      const locations = await this.$axios
        .$get(`/api/v1/projects/${projectId}/locations`)
      const updatedLocations = locations.map((location) => {
        return {
          ...location,
          status: 'Incomplete',
          useCollected: true
        }
      })
      commit('SET', { locations: updatedLocations })
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },
  updateLocationProp ({ commit }, data) {
    commit('UPDATE_LOCATION_PROP', data)
  },
  updateLocation ({ commit }, data) {
    commit('UPDATE_LOCATION', data)
  },
  set ({ commit }, payload) {
    commit('SET', payload)
  }
}

export const mutations = {
  SET (state, obj) {
    const keys = Object.keys(obj)
    // eslint-disable-next-line no-return-assign
    keys.forEach(key => state[key] = obj[key])
  },
  UPDATE_LOCATION (state, { locIdx, key, val }) {
    state.locations[locIdx][key] = val
  },
  UPDATE_LOCATION_PROP (state, { locIdx, key, val }) {
    state.locations[locIdx].properties[key] = val
  }
}
