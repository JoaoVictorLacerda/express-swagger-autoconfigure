import SwaggerInformation from "../../../../config/singletons/SwaggerInformation";
import {ThemeInterface} from "../themes/ThemeInterface";

export default function Theme(theme: ThemeInterface) {

    return (target: Function) => {
        SwaggerInformation.getInstance().setTheme(theme);
    }
}