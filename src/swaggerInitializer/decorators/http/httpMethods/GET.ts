import InitSingletons from "../../../../config/InitSingletons";
import SwaggerInformation from "../../../../config/singletons/SwaggerInformation";
import ExpressGet from "../../../../expressInitializer/decorators/httpMethods/ExpressGet";

export default function Get(endpoint:string="/",...middleware:any) {

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        InitSingletons(target.constructor.name)
        descriptor.value.endpoint = "GET "+endpoint
        SwaggerInformation.getInstance().getEnpoints()[target.constructor.name]["GET "+endpoint] = {}
        SwaggerInformation.getInstance().getEnpoints()[target.constructor.name]["GET "+endpoint]["security"] = middleware.length

        addExpressInformation(endpoint, target, descriptor, middleware)

    }
}

function addExpressInformation(endpoint:string,target: any, descriptor: PropertyDescriptor, ...middleware:any){
    const constructorName= target.constructor.name
    const functionValue= descriptor.value
    ExpressGet(endpoint, constructorName, functionValue, middleware)
}