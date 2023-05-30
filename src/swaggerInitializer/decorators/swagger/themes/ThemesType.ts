import FeelingBlue from "./FeelingBlue";
import Flattop from "./Flattop";
import Material from "./Material";
import Monokai from "./Monokai";
import Muted from "./Muted";
import NewsPaper from "./NewsPaper";
import Outline from "./Outline";

const ThemesType = {
    FEELING_BLUE:new FeelingBlue(),
    FLATTOP: new Flattop(),
    MATERIAL: new Material(),
    MONOKAI: new Monokai(),
    MUTED: new Muted(),
    NEWS_PAPER: new NewsPaper(),
    OUTLINE: new Outline(),
}

export default ThemesType;