const response=require('../libs/responseLib')
const logger=require('../libs/loggerLib')

let errorHandler=(errorHandler,req,res,next)=>{
    logger.error(err.message, 'Error happened in app', 5)
    let apiResponse = response.generate(true, 'Error happened in app',500, null)
    res.send(apiResponse)
}

let notFoundHandler = (req,res,next)=>{

    console.log("Global not found handler called");
    let apiResponse = response.generate(true, 'Route not found in the application',404, null)
    res.status(404).send(apiResponse)

}

module.exports={
    globalErrorHandler : errorHandler,
    globalNotFoundHandler : notFoundHandler
}