class ApiError extends Error{
    constructor(
        satusCode,
        message="something went wrong",
        errors=[],
        stack=null
        
    ){
        super(message);
        this.statusCode=satusCode;
        this.message=message;
        this.errors=this.errors;
        this.data=null;
        this.success=false;
        if(stack){
            this.stack=stack;
        }
        else{
            Error.captureStackTrace(this,this.constructor);
        }
    }
}

export default ApiError;