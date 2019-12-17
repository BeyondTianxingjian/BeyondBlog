import Vue from 'vue'
import App from './views/App'
import router from './router'
import store from './store'
import util from './util/util'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import 'mavon-editor/dist/markdown/github-markdown.min.css'
Vue.config.productionTip = false
Vue.prototype.$setTitle = function (title) {
  if (title) {
    // document.title = store.state.configuration.htmlTitle + " - " + title
  } else {
    // document.title = store.state.configuration.htmlTitle
  }
}
// 按需加载Vant的组件
Vue.use(ElementUI)
Vue.use(mavonEditor)
Vue.prototype.$util = util
Vue.prototype.$markdown = function (value) {
  return mavonEditor.markdownIt.render(value)
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// # sourceMappingURL=main.js.map
