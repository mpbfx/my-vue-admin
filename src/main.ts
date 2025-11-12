import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './styles/index.scss'
import App from './App.vue'
import router from './router'
import 'virtual:svg-icons-register'
const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')
