import SwaggerInformation from "../../../../config/singletons/SwaggerInformation";

export default function ApiDefaultPath(basePath: string) {

    return (target: Function) => {
        SwaggerInformation.getInstance().getSwaggerConfig().basePath= basePath
    }
}