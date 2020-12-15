export const state = () => ({
  projects: [],
  selectedProject: null
})

export const actions = {
  async init ({ commit }) {
    // this will need to be updated to fetch
    // projects based on user once auth is implemented
    const data = await this.$axios
      .$get('api/v1/projects')

    const projects = data.map((project) => {
      return {
        ...project,
        text: project.projectId,
        value: project.projectId
      }
    })
    commit('SET', { projects })
  },
  set ({ commit }, payload) {
    commit('SET', payload)
  },
  setSelectedProject ({ commit, state }, projectId) {
    const selectedProject = state.projects.find((project) => {
      return project.projectId === projectId
    })
    commit('SET', { selectedProject })
  }
}

export const mutations = {
  SET (state, obj) {
    const keys = Object.keys(obj)
    keys.forEach((key) => {
      state[key] = obj[key]
    })
  }
}
