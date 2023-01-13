import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import mitt from "mitt"

const emitter = mitt()
const app = createApp(App)
app.use(store)
app.use(router)
app.config.globalProperties.emitter = emitter
app.mount('#app')
