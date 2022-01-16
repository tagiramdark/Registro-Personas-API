import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import db from './models/model.index'
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/typeDefs'
import http from 'http'
import cors from 'cors'

import fs from 'fs'

const corsOptions = {
    origin: '*',
    credentials: true
}

const app=express();

app.use(cors(corsOptions));
const server=new ApolloServer({
    typeDefs,
    resolvers,
    introspection:true,
    context:async({req,res,connection})=>{
        return {
            db
        };
    }
})
server.start().then((res)=>{
    server.applyMiddleware({app,path:'/graphql'})
})
const httpServer = http.createServer(app)

db.sequelize.sync({force:true}).then(async()=>{
    const rawdata=fs.readFileSync('./randomdata.json');
    const data=JSON.parse(rawdata);   
    data.forEach(async(item)=>{ 
       await db.persona.create(item);
    })
    console.log('Base de datos Sincronizada');
})

export default httpServer;
