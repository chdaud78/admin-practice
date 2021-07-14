import Buttons from "@/router/components/buttons/buttons.js";
import BrandButtons from "@/router/components/buttons/brand-button.js";
import ButtonsGroup from "@/router/components/buttons/buttons-group.js";
import DropdownButton from "@/router/components/buttons/dropdown-button.js";

const routes = [
    ...Buttons,
    ...BrandButtons,
    ...ButtonsGroup,
    ...DropdownButton,
];

export default routes;