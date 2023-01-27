import ExpressInformation from "../../config/singletons/ExpressInformation";

export default function ExpressPut(endpoint:string, constructorName: string,
                                   functionValue: Function,...middleware:any) {

    ExpressInformation.getInstance().getApi()[constructorName]["PUT "+endpoint] = {}
    ExpressInformation.getInstance().getApi()[constructorName]["PUT "+endpoint]["function"] = functionValue
    ExpressInformation.getInstance().getApi()[constructorName]["PUT "+endpoint]["middleware"] = middleware

}