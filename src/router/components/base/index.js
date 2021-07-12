import Breadcrumb from "@/router/components/base/breadcrumb.js";
import Cards from "@/router/components/base/cards.js";
import Carousel from "@/router/components/base/carousel.js";
import Collapses from "@/router/components/base/collapses.js";
import Jumbotrons from "@/router/components/base/jumbotrons.js";
import ListGroups from "@/router/components/base/list-groups.js";
import Navs from "@/router/components/base/navs.js";

const routes = [
    ...Breadcrumb,
    ...Cards,
    ...Carousel,
    ...Collapses,
    ...Jumbotrons,
    ...ListGroups,
    ...Navs,
];

export default routes;
