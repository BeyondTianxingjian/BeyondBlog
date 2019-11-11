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
    }
  }
}

export default configuration
