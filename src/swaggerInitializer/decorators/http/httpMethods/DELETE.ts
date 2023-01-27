import InitSingletons from "../../../../config/InitSingletons";
import SwaggerInformation from "../../../../config/singletons/SwaggerInformation";
import ExpressInformation from "../../../../config/singletons/ExpressInformation";
import ExpressDelete from "../../../../expressInitializer/httpMethods/ExpressDelete";

export default function Delete(endpoint:string="/", ...middleware:any) {

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {

        InitSingletons(target.constructor.name)
        descriptor.value.endpoint ="DELETE "+endpoint
        SwaggerInformation.getInstance().getEnpoints()[target.constructor.name]["DELETE "+endpoint] = {}
        SwaggerInformation.getInstance().getEnpoints()[target.constructor.name]["DELETE "+endpoint]["security"] = middleware.length

        addExpressInformation(endpoint, target, descriptor, middleware)

    }
}

function addExpressInformation(endpoint:string,target: any, descriptor: PropertyDescriptor, ...middleware:any){
    const constructorName= target.constructor.name
    const functionValue= descriptor.value
    ExpressDelete(endpoint, constructorName, functionValue, middleware)
}