import { Request, Response } from "express";
import {Controller, Body, StatusResponse, FormData, Post, FormDataTypes, Query, Header} from "../src/index";


@Controller("/health-check")
export default class HealthCheckController {

    @StatusResponse(200)
    @StatusResponse(400)
    @Body({email:"striasdsang", password:"string"})
    @Post()
    public async check(request: Request, response: Response): Promise<Response> {

        try {
            return response.status(200).json("OK");
        } catch (error: any) {
            return response.status(400).json(error.message);
        }

    }

    @StatusResponse(200)
    @StatusResponse(400)
    @FormData({
        name: FormDataTypes.STRING,

    })
    @Post("/test",(req:any, res:any, next:any)=>{
        const bearerToken = req.headers["authorization"];
        console.log("ok")
        next()
    })
    public async testFormData(request: Request, response: Response): Promise<Response> {

        try {
            return response.status(200).json("OK");
        } catch (error: any) {
            return response.status(400).json(error.message);
        }

    }

    @StatusResponse(200)
    @StatusResponse(400)
    @Query({
        name:"asdsdasdassa"
    })
    @Post("/query-test")
    public async queryTest(request: Request, response: Response): Promise<Response> {

        try {
            const {name} = request.query
            return response.status(200).json(name);
        } catch (error: any) {
            return response.status(400).json(error.message);
        }
    }

    @StatusResponse(200)
    @StatusResponse(400)
    @Header({
        name:"string"
    })
    @Post("/header-test")
    public async headerTest(request: Request, response: Response): Promise<Response> {

        try {
            const {name} = request.headers
            return response.status(200).json(name);
        } catch (error: any) {
            return response.status(400).json(error.message);
        }
    }
}