import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './routers/router'
import store from './stores/store'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
