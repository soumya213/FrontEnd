const express = require('express')
const config=require('./config/appConfig')
const fs=require('fs')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const globalErrorMiddleware=require('./middleware/appErrorHandler')
const helmet=require('helmet')
const http = require('http')
const logger=require('./libs/loggerLib')


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(helmet())

app.get('/',(req,res)=>res.send('Hello World'))

app.use(globalErrorMiddleware.globalErrorHandler)

let modelsPath='./models'
fs.readdirSync(modelsPath).forEach(function (file){
    if (~file.indexOf('.js')) {
        require(modelsPath+'/'+file);
    }
})


let routesPath='./routes'
fs.readdirSync(routesPath).forEach(function (file){
    if (~file.indexOf('.js')) {
        let route =require(routesPath+'/'+file);
        route.setRouter(app);
    }
})

app.use(globalErrorMiddleware.globalNotFoundHandler)

const server= http.createServer(app)
server.listen(config.port)
server.on('error',OnError)
server.on('listening',onListening)

function OnError(error) {
    if (error.syscall !=='listen') {
        logger.error(error.code + ' not equal listen', 'serverOnErrorHandler', 10)
        throw error
    }

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            logger.error(error.code + ':elavated privileges required', 'serverOnErrorHandler', 10)
            process.exit(1)
            break
        case 'EADDRINUSE':
            logger.error(error.code + ':port is already in use.', 'serverOnErrorHandler', 10)
            process.exit(1)
            break
        default:
            logger.error(error.code + ':some unknown error occured', 'serverOnErrorHandler', 10)
            throw error
    }
}

function onListening() {
    var addr = server.address()
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    ('Listening on ' + bind)
    // logger.info('server listening on port' + addr.port, 'serverOnListeningHandler', 10)
    let db = mongoose.connect(config.db.uri, { useMongoClient: true })
}


mongoose.connection.on('error',function (err){
    console.log('Databse Connection Error');
    console.log(err);
})

mongoose.connection.on('open',function(err){
    if (err) {
        console.log("Database Error");
        console.log(err);
    } else {
        console.log("Connection successfully established");
    }
})