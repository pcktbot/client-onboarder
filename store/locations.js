export const state = () => ({
  locations: {},
  selected: []
})
export const getters = {}

export const actions = {
  async init ({ commit }, projectId) {
    try {
      const locations = await this.$axios
        .$get(`/api/v1/projects/${projectId}/locations`)
      const updatedLocations = locations.reduce((acc, curr) => {
        acc[curr.locationId] = {
          ...curr,
          status: 'Incomplete',
          useCollected: true
        }
        return acc
      }, {})
      commit('SET', { locations: updatedLocations })
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },
  setSelected ({ commit }, ids) {
    const val = ids || []
    commit('SET_SELECTED', val)
  },
  updateSelected ({ commit }, data) {
    commit('UPDATE_SELECTED_LOCATION', data)
  }
}

export const mutations = {
  SET (state, obj) {
    const keys = Object.keys(obj)
    keys.forEach((key) => {
      state[key] = obj[key]
    })
  },
  SET_SELECTED (state, val) {
    state.selected = val
  },
  UPDATE_SELECTED_LOCATION (state, { key, val }) {
    state.locations[state.selected[0]].properties[key] = val
  }
}
