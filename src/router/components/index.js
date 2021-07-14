import Base from "@/router/components/base/index.js";
import Buttons from "@/router/components/buttons/index.js";
import Charts from "@/router/components/charts/index.js";
import Forms from "@/router/components/forms/index.js";

const routes = [
    ...Base,
    ...Buttons,
    ...Charts,
    ...Forms,
];

export default routes;
