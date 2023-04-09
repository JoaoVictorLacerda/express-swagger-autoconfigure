export default function makeBodyDoc(params: any){
    const parameters:any = {
        parameters:[]
    }
    const schema:any ={
        "type": "object",
        "properties":{}
    }
    Object.keys(params).forEach( (key:any) =>{
        schema.properties[key]= {
            "type": params[key]
        }
    })
    const paramPath={
        "in": "body",
        "name": "body",
        "required": true,
        "schema":schema
    }
    parameters.parameters.push(paramPath);
    return parameters;
}