import { createApp } from 'vue'
import Router from 'vue-router'
import 'lib'
import App from './App.vue'
const router = new Router()

const app = createApp(App)
app.use(router)
app.mount('#app')
