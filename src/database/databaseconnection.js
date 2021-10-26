'use script'
/******************************************************
    Setup portMongo and DataBaseName
******************************************************/
const constantes =require('../helpers/constantes');


/******************************************************
    Call Morgan
******************************************************/
const mongoose = require('mongoose');
mongoose.connect(constantes.pathMongo,IsConnected)

function IsConnected(err, req)
{
    if(err)
    {
        console.log(`Error al conectarse a la base de datos: ${err}`)
    }
    else{
        console.log("Conexión establecida con la base de datos..")
    }
}
module.exports={
    mongoose:mongoose
}