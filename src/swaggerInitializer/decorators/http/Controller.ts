import InitSingletons from "../../../config/InitSingletons";
import ExpressInformation from "../../../config/singletons/ExpressInformation";

export default function Controller(controller: string) {

    return (target: Function) => {

        InitSingletons(target.name)
        ExpressInformation.getInstance().getApi()[target.name]["endpoint"] = controller
    }
}
