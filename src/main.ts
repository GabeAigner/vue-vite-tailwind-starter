import { createApp } from 'vue'
import { createHead } from 'unhead'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/styles/index.postcss'

import './assets/main.css'

const head = createHead()
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
