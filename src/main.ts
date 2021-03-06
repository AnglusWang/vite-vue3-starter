import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'

import router from './router/index'
import 'element-plus/lib/theme-chalk/index.css'

createApp(App).use(router).use(ElementPlus).mount('#app')
