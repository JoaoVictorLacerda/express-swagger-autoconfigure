import SwaggerInformation from "../../../config/singletons/SwaggerInformation";
import ExpressInformation from "../../../config/singletons/ExpressInformation";
import swaggerUi from "swagger-ui-express"
import buildObjectPath from "./util/buildObjectPath";

export default function SwaggerInitializer(target: Function){

    const swaggerConfig = SwaggerInformation.getInstance().getSwaggerConfig();
    const app = ExpressInformation.getInstance().getApi().app;

    configRoutes(swaggerConfig.paths)

    let swaggerSetup;
    if(SwaggerInformation.getInstance().getTheme() == undefined){
        swaggerSetup = swaggerUi.setup(swaggerConfig);
    }else {
        swaggerSetup = swaggerUi.setup(swaggerConfig,SwaggerInformation.getInstance().getTheme().getCss());
    }
    app.use(SwaggerInformation.getInstance().getSwaggerEnpoint(), swaggerUi.serve, swaggerSetup);
}

function configRoutes(paths: any){
    const mappedApi = SwaggerInformation.getInstance().getEnpoints();

    Object.keys(mappedApi).forEach( (key:any) =>{

        Object.keys(mappedApi[key]).forEach( (key2:any) =>{
            if(key2 !== "endpoint"){

                const endpoint = key2.split(" ")[0].toLowerCase();
                const controllerName = mappedApi[key].endpoint.replace("/","-").toUpperCase();
                const statusRequest = mappedApi[key][key2].status
                const controller = mappedApi[key][key2];
                const doc = buildObjectPath(endpoint, controllerName, statusRequest, controller);

                if(!paths[mappedApi[key].endpoint+key2.split(" ")[1]]){
                    paths[mappedApi[key].endpoint+key2.split(" ")[1]] = {}
                }
                paths[mappedApi[key].endpoint+key2.split(" ")[1]][endpoint] = doc

            }
        })
    })
}

function treatUrl(url:string){

    while (url.indexOf(":") != -1){

    }
}
