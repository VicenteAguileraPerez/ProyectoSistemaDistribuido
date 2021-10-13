/******************************************************
    Create new routes with Router of Express
******************************************************/
const {Router} = require('express');
const router = Router();

router.get("/hola/:name",(req, res)=>{
    res.send(200,{"message":`Hola mundo ${req.params.name}`});
});


router.get("/",(req, res)=>{
    res.status(200).send({"todos":[]});
});

router.get("/:id",(req, res)=>{
    res.status(200).send({"people":`people ${req.params.id}`});
});

router.post("/",(req, res)=>{
    console.log(JSON.parse(JSON.stringify(req.body)));
    res.status(200).send({"message":`Persona creada`});
});

router.delete("/:id",(req, res)=>{
    res.status(200).send({"delete":`Persona ${req.params.id}`});
});

router.put("/:id",(req, res)=>{
    res.status(200).send({"update":`Persona ${req.params.id}`});
});



module.exports = router;