import SwaggerInformation from "../../../../config/singletons/SwaggerInformation";

export default function FormData(formData:any) {

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const endpoint = descriptor.value.endpoint
        SwaggerInformation.getInstance().getEnpoints()[target.constructor.name][endpoint]["formData"] = formData

    }
}
export enum FormDataTypes{
    STRING="string",
    NUMBER="number",
    BOOLEAN="boolean",
    FILE="file",
    ARRAY="array"
}