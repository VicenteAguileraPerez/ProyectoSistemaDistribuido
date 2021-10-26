
function isEmpty(json)
{
    var message="";
    for (var clave in json) 
    {
        if(json[clave]!="")
        {
            //console.log(json[clave])
        }
        else{
            message= clave+" está vacío";
            break;
        }
       
    }
    return message;
}
function isvalidLength(json,lengths)
{
    var message="";
    var pos=0;
    for (var clave in json) 
    {
        
        if(!json[clave].length>lengths[pos] && clave!="telefono")
        {
            message= clave+` debe ser menor a ${lengths[pos]} caracteres`;
        }
        else if( clave=="telefono" && json[clave].length!=lengths[pos])
        {
            message= clave+` debe ser igual a ${lengths[pos]} caracteres`;
        }
        pos++;
        if(lengths[pos]==1000)
            pos++;
    }
    return message;
}
function isvalidPhone(phone)
{
    if(!/[0-9]{10}/g.exec(phone))
    {
        return "El campo teléfono no es válido"
    }
    return "";
}
function isvalidEmail(email)
{
    
}
module.exports={
    isEmpty,
    isvalidLength,
    isvalidPhone
}