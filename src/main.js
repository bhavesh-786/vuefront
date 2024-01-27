import './assets/main.css'

import { createApp, h } from 'vue'
import App from './App.vue'
import './style.css'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

const app = createApp({
    render: () => h(App),
})

app.use(store)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
