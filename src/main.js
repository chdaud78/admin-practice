import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Sidebar, Alert, Popover } from '@coreui/coreui';

const app = createApp(App);

app.use(store).use(router);
app.mount("#app");
