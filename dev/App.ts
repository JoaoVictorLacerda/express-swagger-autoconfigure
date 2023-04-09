import  Express from "express";
import {
    BasePath,
    BearerTokenJWT,
    Description,
    ExpressInitializer,
    SwaggerInitializer,
    Title,
    Version
} from "../src/index";
import HealthCheckController from "./Controller";

@SwaggerInitializer
@BasePath("/doc")
@Description("Essa api é responsável pela estrutura backend do projeto RunBuddy")
@Title("RunBuddy")
@Version("1.0.0")
@BearerTokenJWT(true)
export default class App {

    @ExpressInitializer
    private app: Express.Express;

    constructor () {
        this.initControllers();
    }

    private initControllers(){
        new HealthCheckController();
    }
    public getApp(): Express.Express {
        return this.app;
    }
}