import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import pkg from '../package.json'
import config from './config'
const app = express();
//localhost:81

var corOptions = {
    origin: "http://localhost:4200",
    credentials:true,            
    optionSuccessStatus:200
}
app.set('pkg', pkg);
app.use(morgan(config.Mode));
app.use(cors(corOptions));
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

const db = require("./models/model.index");

const forzar = true;
db.sequelize.sync({
    force: forzar
}).then(async () => {
    if (forzar) {
        console.log('Drop and Resync Db');   
        CrearPersonas()    
    }
});
const persona=db.persona;
async function CrearPersonas(){
    await persona.create({
        nombre:"Angel Iram",
        apellidoPaterno:"Garcia",
        apellidoMaterno:"Fernandez",
        direccion:"Lazaro Cardenas",
        telefono:8334395289
    })  
    await persona.create({
        nombre:"Audomaro",
        apellidoPaterno:"Duran",
        apellidoMaterno:"",
        direccion:"UT",
        telefono:55555555
    })  
    await persona.create({
        nombre:"Daniel",
        apellidoPaterno:"Zaleta",
        apellidoMaterno:"",
        direccion:"Cardenas",
        telefono:9898562516
    })  
    await persona.create({
        nombre:"Pablo",
        apellidoPaterno:"Salomon",
        apellidoMaterno:"",
        direccion:"Lazaro Cardenas",
        telefono:98744165498
    }),await persona.create({
        nombre:"Angel Iram",
        apellidoPaterno:"Garcia",
        apellidoMaterno:"Fernandez",
        direccion:"Lazaro Cardenas",
        telefono:8334395289
    })  
    await persona.create({
        nombre:"Audomaro",
        apellidoPaterno:"Duran",
        apellidoMaterno:"",
        direccion:"UT",
        telefono:55555555
    })  
    await persona.create({
        nombre:"Daniel",
        apellidoPaterno:"Zaleta",
        apellidoMaterno:"",
        direccion:"Cardenas",
        telefono:9898562516
    })  
    await persona.create({
        nombre:"Pablo",
        apellidoPaterno:"Salomon",
        apellidoMaterno:"",
        direccion:"Lazaro Cardenas",
        telefono:98744165498
    }),await persona.create({
        nombre:"Angel Iram",
        apellidoPaterno:"Garcia",
        apellidoMaterno:"Fernandez",
        direccion:"Lazaro Cardenas",
        telefono:8334395289
    })  
    await persona.create({
        nombre:"Audomaro",
        apellidoPaterno:"Duran",
        apellidoMaterno:"",
        direccion:"UT",
        telefono:55555555
    })  
    await persona.create({
        nombre:"Daniel",
        apellidoPaterno:"Zaleta",
        apellidoMaterno:"",
        direccion:"Cardenas",
        telefono:9898562516
    })  
    await persona.create({
        nombre:"Pablo",
        apellidoPaterno:"Salomon",
        apellidoMaterno:"",
        direccion:"Lazaro Cardenas",
        telefono:98744165498
    }),await persona.create({
        nombre:"Angel Iram",
        apellidoPaterno:"Garcia",
        apellidoMaterno:"Fernandez",
        direccion:"Lazaro Cardenas",
        telefono:8334395289
    })  
    await persona.create({
        nombre:"Audomaro",
        apellidoPaterno:"Duran",
        apellidoMaterno:"",
        direccion:"UT",
        telefono:55555555
    })  
    await persona.create({
        nombre:"Daniel",
        apellidoPaterno:"Zaleta",
        apellidoMaterno:"",
        direccion:"Cardenas",
        telefono:9898562516
    })  
    await persona.create({
        nombre:"Pablo",
        apellidoPaterno:"Salomon",
        apellidoMaterno:"",
        direccion:"Lazaro Cardenas",
        telefono:98744165498
    }),await persona.create({
        nombre:"Angel Iram",
        apellidoPaterno:"Garcia",
        apellidoMaterno:"Fernandez",
        direccion:"Lazaro Cardenas",
        telefono:8334395289
    })  
    await persona.create({
        nombre:"Audomaro",
        apellidoPaterno:"Duran",
        apellidoMaterno:"",
        direccion:"UT",
        telefono:55555555
    })  
    await persona.create({
        nombre:"Daniel",
        apellidoPaterno:"Zaleta",
        apellidoMaterno:"",
        direccion:"Cardenas",
        telefono:9898562516
    })  
    await persona.create({
        nombre:"Pablo",
        apellidoPaterno:"Salomon",
        apellidoMaterno:"",
        direccion:"Lazaro Cardenas",
        telefono:98744165498
    }),await persona.create({
        nombre:"Angel Iram",
        apellidoPaterno:"Garcia",
        apellidoMaterno:"Fernandez",
        direccion:"Lazaro Cardenas",
        telefono:8334395289
    })  
    await persona.create({
        nombre:"Audomaro",
        apellidoPaterno:"Duran",
        apellidoMaterno:"",
        direccion:"UT",
        telefono:55555555
    })  
    await persona.create({
        nombre:"Daniel",
        apellidoPaterno:"Zaleta",
        apellidoMaterno:"",
        direccion:"Cardenas",
        telefono:9898562516
    })  
    await persona.create({
        nombre:"Pablo",
        apellidoPaterno:"Salomon",
        apellidoMaterno:"",
        direccion:"Lazaro Cardenas",
        telefono:98744165498
    }),await persona.create({
        nombre:"Angel Iram",
        apellidoPaterno:"Garcia",
        apellidoMaterno:"Fernandez",
        direccion:"Lazaro Cardenas",
        telefono:8334395289
    })  
    await persona.create({
        nombre:"Audomaro",
        apellidoPaterno:"Duran",
        apellidoMaterno:"",
        direccion:"UT",
        telefono:55555555
    })  
    await persona.create({
        nombre:"Daniel",
        apellidoPaterno:"Zaleta",
        apellidoMaterno:"",
        direccion:"Cardenas",
        telefono:9898562516
    })  
    await persona.create({
        nombre:"Pablo",
        apellidoPaterno:"Salomon",
        apellidoMaterno:"",
        direccion:"Lazaro Cardenas",
        telefono:98744165498
    }),await persona.create({
        nombre:"Angel Iram",
        apellidoPaterno:"Garcia",
        apellidoMaterno:"Fernandez",
        direccion:"Lazaro Cardenas",
        telefono:8334395289
    })  
    await persona.create({
        nombre:"Audomaro",
        apellidoPaterno:"Duran",
        apellidoMaterno:"",
        direccion:"UT",
        telefono:55555555
    })  
    await persona.create({
        nombre:"Daniel",
        apellidoPaterno:"Zaleta",
        apellidoMaterno:"",
        direccion:"Cardenas",
        telefono:9898562516
    })  
    await persona.create({
        nombre:"Pablo",
        apellidoPaterno:"Salomon",
        apellidoMaterno:"",
        direccion:"Lazaro Cardenas",
        telefono:98744165498
    })
}



// routes
require('./routes/persona.router')(app)

app.get('/', (req, res) => {
    res.json({
        Nombre: app.get('pkg').name,
        Autor: app.get('pkg').author,
        Descripcion: app.get('pkg').description,
        Version: app.get('pkg').version
    })
})

export default app