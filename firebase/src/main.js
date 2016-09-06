import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Landing from './containers/Landing'
import About from './containers/About'
import MeetTheSquad from './containers/MeetTheSquad'
import Request from './containers/Request'
import VueMdl from 'vue-mdl'

// import the main.css
import './main.css'

Vue.use(VueRouter)
Vue.use(VueMdl)

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
