'use script'
/******************************************************
    Call Morgan
******************************************************/
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PeopleSchema =Schema({
    
	apellidos     :{type:String},//150
	ciudad_origen :{type:String},//100
	descripcion   :{type:String},//300
	email         :{type:String},//100
	id            :{type:Number},
	licenciatura  :{type:String},//100
	nombre        :{type:String},//50
	telefono      :{type:String},//10
	 
})

module.exports = mongoose.model("PeopleSchema", PeopleSchema)
