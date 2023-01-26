import makeBodyDoc from "./makeBodyDoc";
import makeParamsDoc from "./makeParamsDoc";

export default function buildObjectPath(
    httpMethod: string,
    controllerName: string,
    status: string[],
    controller:any
): any{

    const statusTransformed: any = getStatusTransformed(status)

    const securityResult= isSecurity(controller);
    const docRequest= isBody(controller)
    const isParam:any = isParamPath(controller);
    return  {
        security:securityResult,
        tags:[
            controllerName
        ],
        parameters:isParam.parameters,
        requestBody:docRequest,
        responses:{
            ...statusTransformed
        }
    };
}

function isParamPath(controller: any){
    let paramResult = {}
    if(controller.paramPath){
        paramResult=makeParamsDoc(controller.paramPath);
    }
    return paramResult;
}
function isSecurity(controller: any){

    let securityResult:any = [];
    if(controller.security > 0){
        securityResult = [
            {
                "bearerAuth": []
            }
        ]
    }
    return securityResult;
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
