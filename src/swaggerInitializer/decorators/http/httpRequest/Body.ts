import SwaggerInformation from "../../../../config/singletons/SwaggerInformation";
import InitSingletons from "../../../../config/InitSingletons";

export default function Body(body:any) {

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        InitSingletons(target.constructor.name)
        const endpoint = descriptor.value.endpoint
        SwaggerInformation.getInstance().getEnpoints()[target.constructor.name][endpoint]["body"] = body

    }
}