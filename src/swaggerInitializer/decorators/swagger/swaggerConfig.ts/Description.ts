import SwaggerInformation from "../../../../config/singletons/SwaggerInformation";

export default function Description(description: string) {

    return (target: Function) => {
        SwaggerInformation.getInstance().getSwaggerConfig().info.description= description
    }
}