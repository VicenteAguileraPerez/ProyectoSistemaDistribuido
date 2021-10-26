/******************************************************
    Create new routes with Router of Express
******************************************************/
const {Router, json} = require('express');
const router = Router();
/******************************************************
    Call Mongo
******************************************************/
const connectMongo = require('../database/databaseconnection');

/******************************************************
    Call controller
******************************************************/
const controllerPeople = require('../controllers/peopleController');


router.get("/hola/:name",(req, res)=>{
    res.send(200,{"message":`Hola mundo ${req.params.name}`});
});

/******************************************************
    localhost:3000/api/v1/people/
******************************************************/

router.get("/",(req, res)=>{
    controllerPeople.getPeoples(req,res);
 
   
});

/******************************************************
    localhost:3000/api/v1/people/617860d32855e42b709cb21f
******************************************************/
router.get("/:id",(req, res)=>{
    controllerPeople.getPeople(req,res)
});
/******************************************************
    body
    {
        "apellidos":"Aguilera Perez",
        "ciudad_origen":"UPN",
        "descripcion":"esto es una descripcion",
        "email":"vicente@hotmail.com",
        "licenciatura":"ISC",
        "nombre":"Vicente",
        "telefono":"4521917054"
    }
******************************************************/
router.post("/",(req, res)=>{
    
   controllerPeople.createPeople(req,res)
});
/******************************************************
    localhost:3000/api/v1/people/617860d32855e42b709cb21f
******************************************************/
router.delete("/:id",(req, res)=>{
    controllerPeople.deletePeople(req,res);
});

router.put("/:id",(req, res)=>{
    controllerPeople.updatePeople(req,res);
});



module.exports = router;