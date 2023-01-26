export default class ExpressInformation {
    private constructor() {
    }
    private static instance:ExpressInformation;
    public static getInstance(){

        if(!ExpressInformation.instance){
            ExpressInformation.instance = new ExpressInformation();
        }
        return ExpressInformation.instance;
    }
    private mappedApi: any = {}

    public getApi(): any{
        return this.mappedApi;
    }
}