// import { getCategories } from '../mixins/fieldData.js'
import { mapFields, flattenFields } from '~/mixins/form-util'

const sectionMaps = {
  section1: [
    ['current_website', 'registrar'],
    ['domain_username', 'domain_password']
  ],
  section2: [
    ['city', 'state', 'postal_code', 'country'],
    ['display_phone_number', 'local_phone_number']
  ]
}

export const state = () => ({
  categories: [],
  fields: []
})

export const actions = {
  async setFields ({ commit }, { projectId, locationId }) {
    if (!locationId || !projectId) { return }
    const form = await this.$axios
      .$get(`api/v1/projects/${projectId}/locations/${locationId}/form`)
    const flattened = flattenFields(form, 'fields')
    commit('SET_FIELDS', flattened)
    const categories = mapFields(form, sectionMaps)
    commit('SET', categories)
  }
  // ,
  // setCategories ({ commit }, { vertical, corp }) {
  //   const categories = getCategories(vertical, corp)
  //   commit('SET', categories)
  // }
}

export const mutations = {
  SET_FIELDS (state, payload) {
    state.fields = payload
  },
  SET (state, categories) {
    state.categories = categories
  }
}
