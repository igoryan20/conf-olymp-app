import './bootstrap';
import '../css/app.css';
import "font-awesome/css/font-awesome.min.css"
import { createApp } from 'vue';
import router from "./router/router";
import axios from "axios";
import { createPinia } from "pinia";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import './lang'

import $ from 'jquery';
window.$ = $;

library.add(faCircle);

const pinia = createPinia()

import App from "@/App.vue";

const app = createApp(App);
app.use(router)
    .use(pinia)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');
