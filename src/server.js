import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import db from './models/model.index'
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/typeDefs'
import http from 'http'



const app=express();

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
    console.log('Base de datos Sincronizada');
})

export default httpServer;
