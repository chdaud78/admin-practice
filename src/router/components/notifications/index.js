import Alerts from "@/router/components/notifications/alerts.js";
import Badge from "@/router/components/notifications/badge.js";
import Modals from "@/router/components/notifications/modals.js";

const routes = [
    ...Alerts,
    ...Badge,
    ...Modals,
];

export default routes;