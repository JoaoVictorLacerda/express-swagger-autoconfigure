import SwaggerInformation from "../../../../config/singletons/SwaggerInformation";

export default function BearerTokenJWT(isSecurity: boolean) {

    return (target: Function) => {
        if(isSecurity){
            SwaggerInformation.getInstance().getSwaggerConfig().components.securitySchemes = {
                bearerAuth:{
                    type:"http",
                    scheme:"bearer",
                    bearerFormat:"JWT"
                }
            }
        }
    }
}