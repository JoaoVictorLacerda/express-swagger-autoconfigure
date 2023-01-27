import SwaggerInformation from "../../../../config/singletons/SwaggerInformation";

export default function BasePath(basePath: string) {

    return (target: Function) => {
        SwaggerInformation.getInstance().getSwaggerConfig().basePath= basePath
    }
}