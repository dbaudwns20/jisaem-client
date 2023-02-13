import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './routers/router'
import store from './stores/store'
import Toast, { PluginOptions } from "vue-toastification"
import "vue-toastification/dist/index.css"

// vue-toastification 옵션
const options: PluginOptions = {
  transition: "Vue-Toastification__fade", // 애니메이션
  maxToasts: 1, // 토스트 메시지 갯수
  newestOnTop: true // 신규메시지가 맨위로
}

const app = createApp(App)
app.use(store)
app.use(router)
app.use(Toast, options)
app.mount('#app')
