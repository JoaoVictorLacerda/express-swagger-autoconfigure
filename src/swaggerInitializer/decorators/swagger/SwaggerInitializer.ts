import SwaggerInformation from "../../../config/singletons/SwaggerInformation";
import ExpressInformation from "../../../config/singletons/ExpressInformation";
import swaggerUi from "swagger-ui-express"

export default function SwaggerInitializer(target: Function){

    const swaggerConfig = SwaggerInformation.getInstance().getSwaggerConfig();
    const app = ExpressInformation.getInstance().getApi().app;

    app.use(swaggerConfig.basePath, swaggerUi.serve, swaggerUi.setup(swaggerConfig))
}