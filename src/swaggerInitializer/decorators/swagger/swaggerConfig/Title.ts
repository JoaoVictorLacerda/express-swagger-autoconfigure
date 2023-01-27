import SwaggerInformation from "../../../../config/singletons/SwaggerInformation";

export default function Title(title: string) {

    return (target: Function) => {
        SwaggerInformation.getInstance().getSwaggerConfig().info.title = title
    }
}