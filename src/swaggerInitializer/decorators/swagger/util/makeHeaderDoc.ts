export default function makeHeaderDoc(params: any){
    const header:any = {
        parameters:[]
    }
    Object.keys(params).forEach( (key:any) =>{
        const paramPath={
            "in": "header",
            "name": key,
            "description": params[key]
        }
        header.parameters.push(paramPath);
    })
    return header;
}