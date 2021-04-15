import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import Line from './components/Line.vue'

const app = createApp(App)
app.use(router)
app.component('li-ne',Line)
app.mount('#app')
