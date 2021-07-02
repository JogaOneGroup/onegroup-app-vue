import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './router'
import { store } from './store'

const router = new createRouter({
  history: createWebHistory(),
  routes
})

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
