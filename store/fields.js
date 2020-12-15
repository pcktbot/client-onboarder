import { getCategories } from '../mixins/fieldData.js'
export const state = () => ({
  categories: []
})

export const actions = {
  setCategories ({ commit }, { vertical, corp }) {
    const categories = getCategories(vertical, corp)
    commit('SET', categories)
  }
}

export const mutations = {
  SET (state, categories) {
    state.categories = categories
  }
}
