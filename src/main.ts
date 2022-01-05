import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import naiveui from "./plugins/naiveui";

const app=createApp(App);
app.use(store).use(router).use(naiveui).mount('#app');

