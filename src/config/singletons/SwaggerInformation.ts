import {ThemeInterface} from "../../swaggerInitializer/decorators/swagger/themes/ThemeInterface";

export default class SwaggerInformation {
    private constructor() {
    }
    private static instance:SwaggerInformation;
    public static getInstance(){

        if(!SwaggerInformation.instance){
            SwaggerInformation.instance = new SwaggerInformation();
        }
        return SwaggerInformation.instance;
    }


    private mappedApi: any = {};
    private theme: ThemeInterface = undefined;
    private swaggerConfig: any = {
        swagger:"2.0",
        info:{
            title: "Default-API",
            description:"this is auto generated documentation with lib {{lib}}",
            version:"1.0.0"
        },
        basePath:"/",
        securityDefinitions:{

        },
        paths:{}
    };
    private swaggerEndpoint="/"


    public getTheme():any{
        return this.theme
    }
    public setTheme(theme:ThemeInterface){
        this.theme=theme;
    }

    public getEnpoints(): any{
        return this.mappedApi;
    }

    public getSwaggerConfig(): any{
        return this.swaggerConfig;
    }

    public getSwaggerEnpoint(){
        return this.swaggerEndpoint
    }
    public setSwaggerEndpoint(swaggerEndpoint: string){
        this.swaggerEndpoint=swaggerEndpoint;
    }
}