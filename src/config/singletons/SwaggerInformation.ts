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
    private swaggerConfig: any = {
        openapi:"3.0.0",
        info:{
            title: "Default-API",
            description:"this is auto generated documentation with lib {{lib}}",
            version:"1.0.0"
        },
        basePath:"/",
        components:{
            securitySchemes:{

            }
        },
        paths:{}
    };

    public getEnpoints(): any{
        return this.mappedApi;
    }

    public getSwaggerConfig(): any{
        return this.swaggerConfig;
    }
}