'use script'
/******************************************************
    Call Express
******************************************************/
const express =require('express');
/******************************************************
    Setup port
******************************************************/
const constantes =require('./src/helpers/constantes');
/******************************************************
    Call Morgan
******************************************************/
const morgan = require('morgan')

/******************************************************
    Initialize Express Instance
******************************************************/
const app = express();

/******************************************************
    Setting PORT variable pointing an avaliable port
********************************************************/
app.set('port',constantes.port);
app.set('json spaces',2);// formatear el json regresado
/************************************************************
    Setup Middlewares
    Functions that are executed before to get the routes
    also process data before the server recieved
*************************************************************/
    /******************************************************
        Module lend us check the request that arrive to
        server
    ******************************************************/
    //app.use(morgan('combined'))
    app.use(morgan('dev'))
    /*******************************************************
        Tell to express the format data, in this case
        it shall be JSON(JavaScript Object Notation)
    ********************************************************/
    app.use(express.urlencoded({extended: false}))//solo acepta textos planos
    app.use(express.json());
   
    
    


/************************************************************
    Setup Routes
    Functions that shall comunicate the server and browser
*************************************************************/
//https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto
//app.use(require('./src/routes/people'))
app.use(constantes.endpointMainPeople,require('./src/routes/people'))

/******************************************************
    Starting Server npm run start node index
******************************************************/
app.listen(app.get('port'),()=>{
    console.log(`Api Rest en por ${app.get('port')}`);
});
