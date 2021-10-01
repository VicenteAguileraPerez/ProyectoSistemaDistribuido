'use script'

const express =require('express');
const constantes =require('./src/helpers/constantes');
const app = express();

app.set('port',constantes.port);
app.use(express.json());
//https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto
app.get("/hola/:name",(req, res)=>{
    res.send({"message":`Hola mundo ${req.params.name}`});
});

app.listen(app.get('port'),()=>{
    console.log(`Api Rest en por ${app.get('port')}`);
});
