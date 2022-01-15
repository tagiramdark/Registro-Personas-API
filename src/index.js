import server from './server'
import {PORT} from './config'

server.listen({port:PORT},()=>{
    console.log('Server Listen on port',PORT)
});