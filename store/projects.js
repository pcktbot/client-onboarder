export const state = () => ({
  projects: [],
  selectedProject: []
})

export const actions = {
  async init ({ commit }) {
    // this will need to be updated to fetch
    // projects based on user once auth is implemented
    const projects = await this.$axios
      .$get('api/v1/projects')
    commit('SET', { projects })
  }
}

export const mutations = {
  SET (state, { projects }) {
    state.projects = projects
  }
}
