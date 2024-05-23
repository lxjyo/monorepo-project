import { createApp } from "vue";
import Button from "./components/Button.vue";
import App from "./App.vue";
import "./assets/fonts/icofont.css";

const app = createApp(App);
app.component(Button.name, Button);
app.mount("#app");
