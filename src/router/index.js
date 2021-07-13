import { createRouter, createWebHashHistory } from "vue-router";
import Dashboard from "@/router/dashboard/index"
import Theme from "@/router/theme/index"
import Components from "@/router/components/index"

const routes = [
    ...Dashboard,
    ...Theme,
    ...Components,
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    historyApiFallback: true,
    routes,
});

export default router;
