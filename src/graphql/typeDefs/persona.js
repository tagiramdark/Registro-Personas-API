import {gql} from 'apollo-server-express'

export default gql`
    #------------------------------------------------------------
    #TYPE
    #------------------------------------------------------------
    type persona{
        id:ID,
        nombre:String!,
        apellidoPaterno:String!,
        apellidoMaterno:String!,
        direccion:String!,
        telefono:String!
    }
    #------------------------------------------------------------
    #QUERIES
    #------------------------------------------------------------
    extend type Query{
        persona: persona,
        personas:[persona]

    }
    #------------------------------------------------------------
    #MUTATIONS
    #------------------------------------------------------------
    extend type Mutation{
        createPersona(input: CreatePersonaInput): Persona!       
    }
    #------------------------------------------------------------
    #INPUT
    #------------------------------------------------------------
    input CreatePersonaInput{
        nombre:String!,
        apellidoPaterno:String!,
        apellidoMaterno:String!,
        direccion:String!,
        telefono:String!
    }
`