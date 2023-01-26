import InitSingletons from "../../../config/InitSingletons";
import ExpressInformation from "../../../config/singletons/ExpressInformation";
import SwaggerInformation from "../../../config/singletons/SwaggerInformation";

export default function Controller(controller: string) {

    return (target: Function) => {

        InitSingletons(target.name)
        SwaggerInformation.getInstance().getEnpoints()[target.name]["endpoint"] = controller
        ExpressInformation.getInstance().getApi()[target.name]["endpoint"] = controller
    }
}
