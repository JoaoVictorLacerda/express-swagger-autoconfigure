import SwaggerInformation from "../../../../config/singletons/SwaggerInformation";

export default function BearerTokenJWT(isSecurity: boolean) {

    return (target: Function) => {
        if(isSecurity){
            SwaggerInformation.getInstance().getSwaggerConfig().securityDefinitions = {
                Bearer:{
                    type:"apiKey",
                    name:"Authorization",
                    in:"header"
                }
            }
        }
    }
}