import  Express from "express";
import {

    BearerTokenJWT,
    Description,
    ExpressInitializer, SwaggerEndpoint,
    SwaggerInitializer, Theme, ThemesType,
    Title,
    Version
} from "../src/index";
import HealthCheckController from "./Controller";
import ApiDefaultPath from "../src/swaggerInitializer/decorators/swagger/swaggerConfig/ApiDefaultPath";

@SwaggerInitializer
@SwaggerEndpoint("/doc")
@Description("API TEST")
@Title("TEST NAME")
@Version("1.0.0")
@ApiDefaultPath("/")
@BearerTokenJWT(true)
@Theme(ThemesType.NEWS_PAPER)
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