const db = require("../models/model.index");

const persona=db.persona;


exports.getPersonas=async(req,res)=>{
    var data=await persona.findAll();
    res.json(data);
}
exports.insertPersona=async(req,res)=>{    
    persona.create({		
		nombre : req.body.nombre,
		apellidoPaterno : req.body.apellidoPaterno,
        apellidoMaterno : req.body.apellidoMaterno,
        direccion : req.body.direccion,
        telefono : req.body.telefono,
	}).then(async (personacreated)=>{        
        res.json({        
        success:true,
        msg: 'persona Insertada',
        data:{
            insertId:personacreated.id
        }
    });
    })   
}
exports.updatePersona=async(req,res)=>{
    persona.update({       
		nombre : req.body.nombre,
		apellidoPaterno : req.body.apellidoPaterno,
        apellidoMaterno : req.body.apellidoMaterno,
        direccion : req.body.direccion,
        telefono : req.body.telefono,
    },{where:{
        id: req.params.id
    }}).then(()=>{
        res.json({
            msg:"success"
        })
    })
}
exports.deletePersona=async(req,res)=>{
    persona.destroy({
        where:{
            id: req.params.id
        }
    }).then((rowDeleted)=>{
        if(rowDeleted===1)
        res.json({
            success: true,
            data:{
                msg:"deleted"
            }
        })
    })
}