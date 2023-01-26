import express, {json, Router} from "express";
import ExpressInformation from "../../config/singletons/ExpressInformation";
import SwaggerInitializer from "../../swaggerInitializer/decorators/swagger/SwaggerInitializer";


export default function ExpressInjectable(target: any, propertyKey: string) {

    const rotes:any = ExpressInformation.getInstance().getApi();

    const app = express()
    app.use( json() );

    Object.keys(rotes).forEach( (key:any) =>{

        const expressRoutes = Router();
        const controllerName = key;

        Object.keys(rotes[key]).forEach(key2 => {

            if(key2 !== "endpoint"){

                const httpMethodAndRoute = key2.split(" ");
                const callback = rotes[key][key2].function;
                const middleware = rotes[key][key2].middleware;

                getHttpMethod(expressRoutes, httpMethodAndRoute[0], httpMethodAndRoute[1], callback, middleware)

            }
        })
        const finalUrl = rotes[controllerName].endpoint
        app.use(finalUrl, expressRoutes)
    })

    rotes["app"] = app
    target[propertyKey] = app;
}

function getHttpMethod(expressApp:Router, method:string,endpoint: string, callback:any, middlewares:any) {
    if(middlewares.length > 0){
        switch (method){
            case "POST":
                return expressApp.post(endpoint, middlewares, callback);
            case "GET":
                return expressApp.get(endpoint, middlewares, callback);
            case "PATCH":
                return expressApp.patch(endpoint, middlewares, callback);
            case "PUT":
                return expressApp.put(endpoint, middlewares, callback);
            case "DELETE":
                return expressApp.delete(endpoint, middlewares, callback);
        }
    }else{
        switch (method){
            case "POST":
                return expressApp.post(endpoint, callback);
            case "GET":
                return expressApp.get(endpoint, callback);
            case "PATCH":
                return expressApp.patch(endpoint, callback);
            case "PUT":
                return expressApp.put(endpoint, callback);
            case "DELETE":
                return expressApp.delete(endpoint, callback);
        }
    }
}