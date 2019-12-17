const configuration = {
  state: {
    githubUsername: '',
    htmlTitle: ''
  },
  mutations: {
    SET_CONFIGURATION: (state, configuration) => {
      state.githubUsername = configuration['githubUsername'] || 'GitHub-Laziji'
      state.htmlTitle = configuration['htmlTitle'] || `${state.githubUsername}的博客`
    }
  },
  actions: {
    LocalReload ({ commit }, configuration) {
      commit('SET_CONFIGURATION', configuration)
    },
    Init ({ commit }) {
      if (process.env.NODE_ENV === 'production') {
        let xmlhttp
        if (window.hasOwnProperty('XMLHttpRequest')) {
          xmlhttp = new XMLHttpRequest()
        } else {
          xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
        }
        xmlhttp.open('GET', 'static/configuration.json', false)
        xmlhttp.send()
        let configuration = JSON.parse(xmlhttp.responseText)
        commit('SET_CONFIGURATION', configuration)
      } else {
        let configuration = {
          githubUsername: 'BeyondTianxingjian',
          htmlTitle: 'Beyond_SSY的博客'
        }
        commit('SET_CONFIGURATION', configuration)
      }
    }
  }
}
export default configuration
// # sourceMappingURL=configuration.js.map
