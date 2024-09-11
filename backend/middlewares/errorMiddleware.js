export default (err,req,res,next)=>{
    const error ={
        status : err.statusCode || 500,
        message : err.message || "Internal server error"

    }

    res.status(error.status).send({
        message : error.message,
        stack : err.stack,
        err
    })

   


    next()
}