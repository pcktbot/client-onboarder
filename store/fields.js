import { getCategories } from '../mixins/fieldData.js'
export const state = () => ({
  categories: []
})

export const actions = {
  async setFields ({ commit }, { projectId, locationId }) {
    const form = await this.$axios
      .$get(`api/v1/projects/${projectId}/locations/${locationId}/form`)
    const categories = form.sections.map(section => ({
      ...section,
      id: toKebab(section.name),
      isBulk: false,
      isComplete: false,
      isReviewed: false
    }))
    commit('SET', categories)
  },
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

function toKebab (str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
}
