import SwaggerInformation from "../../../../config/singletons/SwaggerInformation";

export default function StatusResponse(status:number, description:string="Default description") {

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const endpoint = descriptor.value.endpoint;
        let statusObject:any = SwaggerInformation.getInstance().getEnpoints()[target.constructor.name][endpoint]["status"];
        if(!statusObject) {
            statusObject = {}
            statusObject[status] = {description};
            SwaggerInformation.getInstance().getEnpoints()[target.constructor.name][endpoint]["status"] = statusObject;
        }else {
            statusObject[status] = {description};
        }
    }
}