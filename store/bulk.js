export const state = () => {
  return {
    isEnabled: false,
    blendedFieldData: {}
  }
}

export const actions = {
  toggleBulkMode ({ commit }, payload) {
    commit('TOGGLE_BULK_MODE', payload)
  }
}

export const mutations = {
  TOGGLE_BULK_MODE (state, payload) {
    state.isEnabled = payload
  },
  SET (state, obj) {
    const keys = Object.keys(obj)
    // eslint-disable-next-line no-return-assign
    keys.forEach(key => state[key] = obj[key])
  }
}
