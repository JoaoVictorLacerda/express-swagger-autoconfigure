export default function makeQueryDoc(params: any){
    const query:any = {
        parameters:[]
    }
    Object.keys(params).forEach( (key:any) =>{
        const paramPath={
            "in": "query",
            "name": key,
            "description": params[key]
        }
        query.parameters.push(paramPath);
    })
    return query;
}