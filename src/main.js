import 'babel-polyfill'
import 'classlist-polyfill'
import Vue from 'vue'
import axios from './router/axios'
import VueAxios from 'vue-axios'
import App from './App'
import './permission' // 权限
import './error' // 日志
import router from './router/router'
import store from './store'
import { loadStyle } from './util/util'
import * as urls from '@/config/env'
import { iconfontUrl, iconfontVersion } from '@/config/env'
import VueI18n from 'vue-i18n'
import * as filters from './filters' // 全局filter
import './styles/common.scss'
// 引入avue的包
import Avue from '@smallwei/avue/lib/index.js'
// 引入avue的样式文件
import '@smallwei/avue/lib/theme-chalk/index.css'
import basicContainer from './components/basic-container/main'
// 插件 json 展示
import vueJsonTreeView from 'vue-json-tree-view'

// 导入echarts
import echarts from 'echarts'
// 引入elementUI
// import ElementUI from 'element-ui'

import { validatenull } from '@/util/validate'

import './mock/index.js'

// 把echarts赋值到原型
Vue.prototype.echarts = echarts

Vue.prototype.validatenull = validatenull

Vue.use(Avue, { menuType: 'text' })

// Vue.use(ElementUI)

Vue.use(VueI18n)

Vue.use(router)

Vue.use(vueJsonTreeView)

Vue.use(VueAxios, axios)

// 国际化
const i18n = new VueI18n({
  locale: window.localStorage.getItem('lang_swith') || 'CN',
  messages: {
    'CN': require('./i18n/cn'),
    'EN': require('./i18n/en')
  }
})

// 注册全局容器
Vue.component('basicContainer', basicContainer)

// 加载相关url地址
Object.keys(urls).forEach(key => {
  Vue.prototype[key] = urls[key]
})

//加载过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 动态加载阿里云字体库
iconfontVersion.forEach(ele => {
  loadStyle(iconfontUrl.replace('$key', ele))
})

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
