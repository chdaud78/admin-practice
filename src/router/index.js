import { createRouter, createWebHashHistory } from "vue-router";
import Dashboard from "@/router/dashboard/index"
import Theme from "@/router/theme/index"

const routes = [
    ...Dashboard,
    ...Theme,
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    historyApiFallback: true,
    routes,
});

export default router;
