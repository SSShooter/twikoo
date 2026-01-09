import Vue from 'vue'
import App from './App.vue'
import Input from 'element-ui/lib/input'
import Loading from 'element-ui/lib/loading'
import 'element-ui/lib/theme-chalk/input.css'
import 'element-ui/lib/theme-chalk/loading.css'
import '../lib/owo.css'

Vue.use(Input)
Vue.use(Loading)

let app = null

const render = (tcb, options = {}) => {
  Vue.prototype.$tcb = tcb
  Vue.prototype.$twikoo = options
  app = new Vue({ render: h => h(App) })
  app.$mount(options.el || '#twikoo')
  return app
}

export {
  app,
  render
}
