import {ThemeInterface} from "./ThemeInterface";
import {readFileSync} from "fs";

export default class FeelingBlue implements ThemeInterface{
    private theme = readFileSync("src/swaggerInitializer/decorators/swagger/themes/css/theme-feeling-blue.css", "utf-8");

    getCss(): any {
        return {
            customCss: this.theme,
        };
    }
}