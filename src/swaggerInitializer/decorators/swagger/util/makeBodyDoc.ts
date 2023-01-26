export default function makeBodyDoc(request: any){
    return {
        "content": {
            "application/json": {
                "schema": {
                    "type": "object",
                    "example": request
                }
            }
        }
    }
}