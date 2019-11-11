const user = {
  state: {
    // 这里是需要绑定的值
    token: ''
  },
  mutations: {
    // 这里提供方法，供外界调用，给state设置值
  },
  actions: {
    // 这里提供额外业务处理，比如对此存储值的一些校验什么的
  },
  modules: {
    // 这里写额外的依赖
  }
}

export default user
