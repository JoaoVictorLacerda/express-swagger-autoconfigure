import SwaggerInformation from "../../../../config/singletons/SwaggerInformation";

export default function StatusResponse(status:number) {

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const endpoint = descriptor.value.endpoint
        let list = SwaggerInformation.getInstance().getEnpoints()[target.constructor.name][endpoint]["status"];
        if(!list) {
            list = [status]
            SwaggerInformation.getInstance().getEnpoints()[target.constructor.name][endpoint]["status"] = list
        }else {
            list.push(status)
        }
    }
}