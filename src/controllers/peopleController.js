/******************************************************
    Call Mongo
******************************************************/
const mongoose = require('mongoose');
require('../database/peopleSchema');
const PeopleSchema = mongoose.model("PeopleSchema");
/******************************************************
    constantes
******************************************************/
const constantes = require('../helpers/constantes');
/******************************************************
    Call validations
******************************************************/
const validations = require('../helpers/validations');
function getPeoples(req,res)
{
    PeopleSchema.find((err, peoples) =>
    {
      if (err) 
      {
          res.status(500).send({"message":`Internal error ${err.message}`});
      }
      if(!peoples)
      {
        res.status(404).send({"message":"No hay personas registradas"});
      }
      res.status(200).send({"message":peoples});
    
    });
}
function getPeople(req,res)
{
   
    PeopleSchema.findById(req.params.id,(err, people) =>
    {
      if (err) 
      {
          res.status(500).send({"message":`Internal error al buscar registro ${err.message}`});
      }
      else if(people){
        res.status(200).send({"message":people});
      }
     else{
        res.status(400).send({"message":"No existe registro"});
     }
    
    });
}
function updatePeople(req,res)
{
    var isEmpty = validations.isEmpty(req.body );
    var isvalidLength = validations.isvalidLength(req.body ,constantes.lengths);
    var isvalidPhone = validations.isvalidPhone(req.body.telefono);
    if(isEmpty=="")
    {
        if(isvalidLength=="")
        {
            if(isvalidPhone=="")
            {
                PeopleSchema.findByIdAndUpdate(req.params.id,req.body,(err, people) =>
                {
                    if (err) 
                    {
                        res.status(500).send({"message":`Internal error al actualizar ${err.message}`});
                    }
                    else if(people){
                        res.status(200).send({"message":people});
                    }
                    else{
                        res.status(400).send({"message":"No existe registro para editarlo"});
                    }
                  
                });   
            }
            else{
                res.status(400).send({"message":`${isvalidPhone}`}); 
            }
        }
        else{
            res.status(400).send({"message":`${isvalidLength}`});
                
        }
    }
    else{
        res.status(400).send({"message":`${isEmpty}`});
    }
}
function createPeople(req,res)
{
    var isEmpty = validations.isEmpty(req.body );
    var isvalidLength = validations.isvalidLength(req.body ,constantes.lengths);
    var isvalidPhone = validations.isvalidPhone(req.body.telefono);
    if(isEmpty=="")
    {
        if(isvalidLength=="")
        {
            if(isvalidPhone=="")
            {
                var peopleNew = new PeopleSchema({
                    apellidos       : req.body.apellidos,
                    ciudad_origen   : req.body.ciudad_origen,
                    descripcion     : req.body.descripcion,
                    email           : req.body.email,
                    licenciatura    : req.body.licenciatura,
                    nombre          : req.body.nombre,
                    telefono        : req.body.telefono,
                  });
                  peopleNew.save( (err, people) =>
                  {
                    if (err) 
                    {
                        res.status(500).send({"message":`Internal error ${err.message}`});
                    }
                    res.status(201).send({"message":people});
                  
                  });   
            }
            else{
                res.status(400).send({"message":`${isvalidPhone}`}); 
            }
        }
        else{
            res.status(400).send({"message":`${isvalidLength}`});
                
        }
    }
    else{
        res.status(400).send({"message":`${isEmpty}`});
    }
}
function deletePeople(req,res)
{
    PeopleSchema.findById(req.params.id,(err, people) =>
    {
      if (err) 
      {
          res.status(500).send({"message":`Internal error al borrar registro ${err.message}`});
      }
      people.remove(err=>{
        if(err)
        {
            res.status(500).send({"message":`Internal error al borrar registro ${err.message}`});
        }
        res.status(200).send({"message":"registro eliminado"});
      })
      
    
    });
}
module.exports={
    getPeoples,
    getPeople,
    updatePeople,
    deletePeople,
    createPeople
}