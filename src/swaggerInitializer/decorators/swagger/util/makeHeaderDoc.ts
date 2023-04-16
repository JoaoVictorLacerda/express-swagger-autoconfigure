export default function makeHeaderDoc(params: any){
    const header:any = {
        parameters:[]
    }
    Object.keys(params).forEach( (key:any) =>{
        const paramPath={
            "in": "header",
            "name": key,
            "type": params[key],
            "required": true
        }
        header.parameters.push(paramPath);
    })
    return header;
}