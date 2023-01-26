import InitSingletons from "../../../../config/InitSingletons";
import SwaggerInformation from "../../../../config/singletons/SwaggerInformation";

export default function Query(query: any) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const endpoint = descriptor.value.endpoint
        SwaggerInformation.getInstance().getEnpoints()[target.constructor.name][endpoint]["query"] = query
    }
}