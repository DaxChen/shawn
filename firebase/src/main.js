import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMdl from 'vue-mdl'
import VueTransferDom from 'vue-transfer-dom'

import App from './App'
import Landing from './containers/Landing'
import About from './containers/About'
import MeetTheSquad from './containers/MeetTheSquad'
import Request from './containers/Request'

// import the main.css
import './main.css'

Vue.use(VueRouter)
Vue.use(VueMdl)
Vue.use(VueTransferDom)

Vue.directive('mdl', {
  bind() {
    /* global componentHandler */
    componentHandler.upgradeElement(this.el);
  }
})

const router = new VueRouter({
  history: true,
  saveScrollPosition: true
})

router.map({
  '/': {
    name: 'landing',
    component: Landing
  },
  '/about': {
    name: 'about',
    component: About
  },
  '/request': {
    name: 'request',
    component: Request
  },
  '/meet-the-squad': {
    name: 'meet-the-squad',
    component: MeetTheSquad
  }
})

router.start(App, '#root')

// #<{(| eslint-disable no-new |)}>#
// new Vue({
//   el: 'body',
//   components: { App }
//   // components: { Landing }
// })
