import { createApp } from 'vue'
//import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import axios from 'axios'
//import VueAxios from 'vue-axios'
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Vue.useAttrs(VueAxios, axios)
//Vue.use(BootstrapVue)
//Vue.use(IconsPlugin)

createApp(App).use(store).use(router).mount('#app')
