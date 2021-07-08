import { createRouter, createWebHashHistory } from "vue-router";
import Dashboard from "@/router/dashboard/index"

const routes = [
    ...Dashboard,
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    historyApiFallback: true,
    routes,
});

export default router;
