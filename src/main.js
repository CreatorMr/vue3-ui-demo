import { createApp } from 'vue'
import App from './App.vue'
import './assets/iconfont.css'
import MyUI from '../modules/my-ui'
// import {MySelect, MyLink} from '../modules/my-ui'
import BusUI from '../modules/bus-ui'
const app = createApp(App)

app.use(MyUI)
app.use(BusUI)
// app.use(MyLink)
// app.use(MySelect)
app.mount('#app')
