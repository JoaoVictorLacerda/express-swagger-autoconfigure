import SwaggerInformation from "../../../../config/singletons/SwaggerInformation";

export default function SwaggerEndpoint(swaggerEndpoint: string) {

    return (target: Function) => {
        SwaggerInformation.getInstance().setSwaggerEndpoint(swaggerEndpoint)
    }
}