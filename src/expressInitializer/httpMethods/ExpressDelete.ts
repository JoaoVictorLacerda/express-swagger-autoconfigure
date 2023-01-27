import ExpressInformation from "../../config/singletons/ExpressInformation";

export default function ExpressDelete(endpoint:string, constructorName: string,
                                      functionValue: Function,...middleware:any) {

        ExpressInformation.getInstance().getApi()[constructorName]["DELETE "+endpoint] = {}
        ExpressInformation.getInstance().getApi()[constructorName]["DELETE "+endpoint]["function"] = functionValue
        ExpressInformation.getInstance().getApi()[constructorName]["DELETE "+endpoint]["middleware"] = middleware
}