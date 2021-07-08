import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/router/dashboard/index"

const routes = [
    ...Dashboard,
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    historyApiFallback: true,
    routes,
});

export default router;
