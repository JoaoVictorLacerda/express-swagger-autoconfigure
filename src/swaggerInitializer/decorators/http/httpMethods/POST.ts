import InitSingletons from "../../../../config/InitSingletons";
import SwaggerInformation from "../../../../config/singletons/SwaggerInformation";
import ExpressPost from "../../../../expressInitializer/decorators/httpMethods/ExpressPost";

export default function Post(endpoint:string="/",...middleware:any) {

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        InitSingletons(target.constructor.name)
        descriptor.value.endpoint = "POST "+endpoint
        SwaggerInformation.getInstance().getEnpoints()[target.constructor.name]["POST "+endpoint] = {}

        addExpressInformation(endpoint, target, descriptor, middleware)
    }
}

function addExpressInformation(endpoint:string,target: any, descriptor: PropertyDescriptor, ...middleware:any){
    const constructorName= target.constructor.name
    const functionValue= descriptor.value
    ExpressPost(endpoint, constructorName, functionValue, middleware)
}