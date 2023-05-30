import {ThemeInterface} from "./ThemeInterface";
import {readFileSync} from "fs";

export default class Monokai implements ThemeInterface{
    private theme = readFileSync("src/swaggerInitializer/decorators/swagger/themes/css/theme-monokai.css", "utf-8");

    getCss(): any {
        return {
            customCss: this.theme,
        };
    }

}