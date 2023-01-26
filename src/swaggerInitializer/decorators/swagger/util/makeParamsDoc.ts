export default function makeParamsDoc(params: any){
    const parameters:any = {
        parameters:[]
    }
    Object.keys(params).forEach( (key:any) =>{
        const paramPath={
            "in": "path",
            "name": key,
            "type": params[key],
            "required": true
        }
        parameters.parameters.push(paramPath);
    })
    return parameters;
}