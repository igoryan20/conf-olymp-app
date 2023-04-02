import './bootstrap';
import '../css/app.css';
import "font-awesome/css/font-awesome.min.css"
import { createApp } from 'vue';
import router from "./router/router";

import App from "@/App.vue";

const app = createApp(App);
app.use(router)
    .mount('#app');
