import SwaggerInformation from "../../../../config/singletons/SwaggerInformation";

export default function ParamPath(paramPath: any) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const endpoint = descriptor.value.endpoint
        SwaggerInformation.getInstance().getEnpoints()[target.constructor.name][endpoint]["paramPath"] = paramPath
    }
}