import ExpressInformation from "../../../config/singletons/ExpressInformation";

export default function ExpressGet(endpoint:string, constructorName: string,
                                   functionValue: Function,...middleware:any) {

    ExpressInformation.getInstance().getApi()[constructorName]["GET "+endpoint] = {}
    ExpressInformation.getInstance().getApi()[constructorName]["GET "+endpoint]["function"] = functionValue
    ExpressInformation.getInstance().getApi()[constructorName]["GET "+endpoint]["middleware"] = middleware

}