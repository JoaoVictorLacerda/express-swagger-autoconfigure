import SwaggerInformation from "../../../../config/singletons/SwaggerInformation";
import InitSingletons from "../../../../config/InitSingletons";

export default function Body(body:any) {

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const endpoint = descriptor.value.endpoint
        SwaggerInformation.getInstance().getEnpoints()[target.constructor.name][endpoint]["body"] = body

    }
}