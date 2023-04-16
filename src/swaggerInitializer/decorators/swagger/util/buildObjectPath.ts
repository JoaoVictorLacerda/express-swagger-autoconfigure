import makeBodyDoc from "./makeBodyDoc";
import makeParamsDoc from "./makeParamsDoc";
import makeFormDataDoc from "./makeFormDataDoc";
import makeQueryDoc from "./makeQueryDoc";
import makeHeaderDoc from "./makeHeaderDoc";


export default function buildObjectPath(
    httpMethod: string,
    controllerName: string,
    status: string[],
    controller:any
): any{

    const statusTransformed: any = getStatusTransformed(status)

    const securityResult= isSecurity(controller);
    const body:any= isBody(controller)
    const param:any = isParamPath(controller);
    const form:any = isFormData(controller);
    const query: any = isQuery(controller);
    const header: any = isHeader(controller);
    return  {
        security:securityResult,
        tags:[
            controllerName
        ],
        parameters: (
            body.parameters || [])
            .concat(
                param.parameters || [],
                form.parameters || [],
                query.parameters || [],
                header.parameters || []
            ),
        responses:{
            ...status
        }
    };
}

function isHeader(controller: any){
    let queryResult = {}
    if(controller.header){
        queryResult=makeHeaderDoc(controller.header);
    }
    return queryResult;
}

function isQuery(controller: any){
    let queryResult = {}
    if(controller.query){
        queryResult=makeQueryDoc(controller.query);
    }
    return queryResult;
}
function isParamPath(controller: any){
    let paramResult = {}
    if(controller.paramPath){
        paramResult=makeParamsDoc(controller.paramPath);
    }
    return paramResult;
}
function isFormData(controller: any){
    let formDataResult = {}
    if(controller.formData){
        formDataResult=makeFormDataDoc(controller.formData);
    }
    return formDataResult;
}

function isBody(controller: any){
    let docRequest={};
    if(controller.body){
        docRequest = makeBodyDoc(controller.body)
    }
    return docRequest
}
function getStatusTransformed(status: string[]=[]){
    const statusTransformed: any = {}
    if(status.length>0){
        for (let i = 0; i < status.length; i++) {
            const s = status[i].toString();
            statusTransformed[s] = {}
        }
    }
    return statusTransformed
}

function isSecurity(controller: any){

    let securityResult:any = [];
    if(controller.security > 0){
        securityResult = [
            {
                "Bearer": []
            }
        ]
    }
    return securityResult;
}
