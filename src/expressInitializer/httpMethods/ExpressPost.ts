import ExpressInformation from "../../../config/singletons/ExpressInformation";

export default function ExpressPost(endpoint:string, constructorName: string,
                                    functionValue: Function,...middleware:any) {

    ExpressInformation.getInstance().getApi()[constructorName]["POST "+endpoint] = {}
    ExpressInformation.getInstance().getApi()[constructorName]["POST "+endpoint]["function"] = functionValue
    ExpressInformation.getInstance().getApi()[constructorName]["POST "+endpoint]["middleware"] = middleware

}