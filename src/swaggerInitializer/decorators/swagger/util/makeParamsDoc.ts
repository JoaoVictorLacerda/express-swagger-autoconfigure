export default function makeParamsDoc(params: any){
    const parameters:any = {
        parameters:[]
    }
    Object.keys(params).forEach( (key:any) =>{
        const paramPath={
            "in": "path",
            "name": key,
            "description": params[key]
        }
        parameters.parameters.push(paramPath);
    })
    return parameters;
}