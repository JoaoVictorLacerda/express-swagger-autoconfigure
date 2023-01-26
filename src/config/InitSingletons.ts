import SwaggerInformation from "./singletons/SwaggerInformation";
import ExpressInformation from "./singletons/ExpressInformation";

export default function InitSingletons(constructorName: string) {

    const swaggerInformation = SwaggerInformation.getInstance().getEnpoints()[constructorName];
    const expressInformation = ExpressInformation.getInstance().getApi()[constructorName];

    if(!expressInformation){
        ExpressInformation.getInstance().getApi()[constructorName] = {}
    }
    if(!swaggerInformation) {
        SwaggerInformation.getInstance().getEnpoints()[constructorName] = {};
    }
}