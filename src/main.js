/*
 * @Author: 2197192973@qq.com yangrui
 * @Date: 2022-09-25 11:33:54
 * @LastEditors: 2197192973@qq.com yangrui
 * @LastEditTime: 2022-09-25 11:42:21
 * @FilePath: \form-generator\vue-schema-form\src\main.js
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
