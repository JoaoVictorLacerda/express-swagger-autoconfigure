import InitSingletons from "../../../../config/InitSingletons";
import SwaggerInformation from "../../../../config/singletons/SwaggerInformation";
import ExpressPatch from "../../../../expressInitializer/decorators/httpMethods/ExpressPatch";

export default function Patch(endpoint:string="/",...middleware:any) {

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        InitSingletons(target.constructor.name)
        descriptor.value.endpoint = "PATCH "+endpoint
        SwaggerInformation.getInstance().getEnpoints()[target.constructor.name]["PATCH "+endpoint] = {}
        SwaggerInformation.getInstance().getEnpoints()[target.constructor.name]["PATCH "+endpoint]["security"] = middleware.length

        addExpressInformation(endpoint, target, descriptor, middleware)

    }
}

function addExpressInformation(endpoint:string,target: any, descriptor: PropertyDescriptor, ...middleware:any){
    const constructorName= target.constructor.name
    const functionValue= descriptor.value
    ExpressPatch(endpoint, constructorName, functionValue, middleware)
}