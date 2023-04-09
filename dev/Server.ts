import { Express } from "express";
import App from "./App";

class Server {

    private server: Express;

    constructor (){
        const app = new App();
        this.server = app.getApp();
    }
    public async startServer():Promise<void> {
        this.server.listen(5567, ()=>{console.log("OK")});
    }

}

new Server().startServer();