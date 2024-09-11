class sendError extends Error{
    constructor(message,status){
        super(message)
        this.statusCode = status;
        
        Error.captureStackTrace(this,this.constructor)
    }
}

export default sendError;