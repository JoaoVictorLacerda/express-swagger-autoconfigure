import InitSingletons from "../../../../config/InitSingletons";
import SwaggerInformation from "../../../../config/singletons/SwaggerInformation";

export default function Header(header: any) {

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        InitSingletons(target.constructor.name)
        const endpoint = descriptor.value.endpoint
        SwaggerInformation.getInstance().getEnpoints()[target.constructor.name][endpoint]["header"] = header
    }
}