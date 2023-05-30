import {ThemeInterface} from "./ThemeInterface";
import {readFileSync} from "fs";

export default class NewsPaper implements ThemeInterface{
    private theme = readFileSync("src/swaggerInitializer/decorators/swagger/themes/css/theme-newspaper.css", "utf-8");

    getCss(): any {
        return {
            customCss: this.theme,
        };
    }

}