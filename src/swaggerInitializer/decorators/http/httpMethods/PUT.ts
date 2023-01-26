import InitSingletons from "../../../../config/InitSingletons";
import SwaggerInformation from "../../../../config/singletons/SwaggerInformation";
import ExpressPut from "../../../../expressInitializer/decorators/httpMethods/ExpressPut";

export default function Put(endpoint:string="/",...middleware:any) {

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        InitSingletons(target.constructor.name)
        descriptor.value.endpoint = "PUT "+endpoint
        SwaggerInformation.getInstance().getEnpoints()[target.constructor.name]["PUT "+endpoint] = {}
        SwaggerInformation.getInstance().getEnpoints()[target.constructor.name]["PUT "+endpoint]["security"] = middleware.length

        addExpressInformation(endpoint, target, descriptor, middleware)
    }
}


function addExpressInformation(endpoint:string,target: any, descriptor: PropertyDescriptor, ...middleware:any){
    const constructorName= target.constructor.name
    const functionValue= descriptor.value
    ExpressPut(endpoint, constructorName, functionValue, middleware)
}