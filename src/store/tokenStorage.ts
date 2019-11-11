import UserApi from "@/api/user"
import store from "@/store/index"
import Vue from 'vue'

const tokenStorage = {
  state: {
    // 这里是需要绑定的值
    token: ''
  },
  mutations: {
    // 这里提供方法，供外界调用，给state设置值
    SET_TOKEN: (state, value) => {
      state.token = value
    },
  },
  actions: {
    // 这里提供额外业务处理，比如对此存储值的一些校验什么的
    Authentication({ commit }, accessToken) {
      UserApi.verifyToken(accessToken).then((response) => {
        let result = response.data
        let githubUsername = store.state.configuration.githubUsername
        if (githubUsername == result['login']) {
          commit('SET_TOKEN', accessToken)
          Vue.prototype.$notify({
            title: '成功',
            message: 'Token绑定成功',
            type: 'success'
          })
        } else {
          Vue.prototype.$message({
            message: 'Token用户不一致',
            type: 'error'
          })
        }
      }).catch(() => {

      })
    }
  }
}

export default tokenStorage
