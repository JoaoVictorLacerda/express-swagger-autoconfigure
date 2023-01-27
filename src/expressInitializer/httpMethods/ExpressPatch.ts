import ExpressInformation from "../../../config/singletons/ExpressInformation";

export default function ExpressPatch(endpoint:string, constructorName: string,
                                     functionValue: Function,...middleware:any) {

    ExpressInformation.getInstance().getApi()[constructorName]["PATCH "+endpoint] = {}
    ExpressInformation.getInstance().getApi()[constructorName]["PATCH "+endpoint]["function"] = functionValue
    ExpressInformation.getInstance().getApi()[constructorName]["PATCH "+endpoint]["middleware"] = middleware
}