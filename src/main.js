import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* 导入ELement Plus组件 */
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
/* ELement Plus全局配置国际化 */
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import '@/style/common.scss'
import 'normalize.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(ElementPlus, { locale: zhCn })

app.mount('#app')
