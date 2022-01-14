const controller=require("../controllers/persona.controller");

module.exports =function (app){
    app.get('/persona',controller.getPersonas)
    app.post('/persona',controller.insertPersona)
    app.put('/persona/:id',controller.updatePersona)
    app.delete('/persona/:id',controller.deletePersona)
}