// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import FastClick from 'fastclick'
import '@/assets/css/styles.scss'
import '@/assets/vui'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$baseUrl = process.env.NODE_ENV === 'development' ? 'http://192.168.16.83:3001' : ''
console.log(process.env.NODE_ENV)
FastClick.attach(document.body)

let ohtml = document.documentElement
let baseWidth = 750
let baseFontSize = 100

getSize()
window.onresize = function () {
  getSize()
}

function getSize () {
  var screenWidth = ohtml.clientWidth
  ohtml.style.fontSize = screenWidth / baseWidth * baseFontSize + 'px'
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
