import { createApp } from 'vue'
import App from './App.vue'
import vuecoms from "vue-custom-components";
import "vue-custom-components/dist/fonts/icofont.css"
import "vue-custom-components/dist/vue-custom-components.css"

createApp(App).use(vuecoms).mount('#app')
