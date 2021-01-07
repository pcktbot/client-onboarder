export const state = () => ({
  selected: null
})
export const getters = {}

export const actions = {
  set ({ commit }, location) {
    const val = location || null
    commit('SET', val)
  },
  update ({ commit }, data) {
    commit('UPDATE', data)
  }
}

export const mutations = {
  SET (state, val) {
    state.selected = val
  },
  UPDATE (state, { val, key1, key2 }) {
    if (key1 && key2) {
      state.selected[key1][key2] = val
    } else if (key1 && !key2) {
      state.selected[key1] = val
    } else {
      throw new Error('property doesnt exist on location')
    }
  }
}
