import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import About from './containers/About'
import Landing from './containers/Landing'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/': {
    component: Landing
  },
  '/about': {
    component: About
  }
})

router.start(App, '#root')

// #<{(| eslint-disable no-new |)}>#
// new Vue({
//   el: 'body',
//   components: { App }
//   // components: { Landing }
// })
