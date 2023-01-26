import SwaggerInformation from "../../../../config/singletons/SwaggerInformation";

export default function Version(version: string) {

    return (target: Function) => {
        SwaggerInformation.getInstance().getSwaggerConfig().info.version = version
    }
}