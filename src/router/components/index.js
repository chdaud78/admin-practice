import Base from "@/router/components/base/index.js";
import Buttons from "@/router/components/buttons/index.js";
import Charts from "@/router/components/charts/index.js";
import Forms from "@/router/components/forms/index.js";
import Notifications from "@/router/components/notifications/index.js";
import Tables from "@/router/components/tables/index.js";
import Widgets from "@/router/components/widgets/index.js";

const routes = [
    ...Base,
    ...Buttons,
    ...Charts,
    ...Forms,
    ...Notifications,
    ...Tables,
    ...Widgets,
];

export default routes;
