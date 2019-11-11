import Vue from 'vue'
import App from './views/App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.prototype.$setTitle = function (title: string) {
  if (title) {
    // document.title = store.state.configuration.htmlTitle + " - " + title
  } else {
    // document.title = store.state.configuration.htmlTitle
  }
}

// 按需加载Vant的组件
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
