import { arryToObject } from '~/mixins/form-util'

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
      // const updatedLocations = locations.reduce((acc, curr) => {
      //   acc[curr.locationId] = {
      //     ...curr,
      //     status: 'Incomplete',
      //     useCollected: true
      //   }
      //   return acc
      // })
      const locWithAddedVal = locations.map((location) => {
        return {
          ...location,
          status: 'Incomplete',
          useCollected: true
        }
      })
      const updatedLocations = arryToObject(locWithAddedVal, 'locationId')

      commit('SET', { locations: updatedLocations })
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },
  setSelected ({ commit }, ids) {
    const val = ids || []
    commit('SET_SELECTED', val)
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
  }
}
