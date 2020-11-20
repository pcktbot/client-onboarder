export const state = () => {
  return {
    isEnabled: false,
    selectedLocations: [],
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
  }
}
