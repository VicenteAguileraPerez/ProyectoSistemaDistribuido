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
const morgan = require('morgan');


/******************************************************
    Initialize Express Instance
******************************************************/
const app = express();
/******************************************************
    Swagger info
******************************************************/
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            "title": "Sistemas Distribuidos App",
            "description": "Este es un proyecto de la materia de Sistemas Distribuidos del TecNM campus Uruapan",
            "contact": {
              "name": "API Support",
              "url": "git+https://github.com/VicenteAguileraPerez/",
              "email": "vicente_prez@hotmail.com"
            },
            "license": {
              "name": "MIT",
              "url": "https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt"
            },
            "version": "1.0.0"
        },
        servers: [
            {
              url: 'http://localhost:3000',
              description: 'Development server',
            },
            {
                url: 'https://proyecto-sistema-distribuido.herokuapp.com/api/v1/people',
                description: 'Production Server',
            },
          ],
    },
    apis: [`.routes/*.js`],
    
    
};
//https://swagger.io/specification/
const swaggerDocs = swaggerJSDoc(swaggerOptions);

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
    /******************************************************
        swagger middleware
    ******************************************************/
    app.use("/api/v1/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocs));
    


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
