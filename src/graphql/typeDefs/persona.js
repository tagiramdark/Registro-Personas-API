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
        telefono:Int!
    }
    #------------------------------------------------------------
    #QUERIES
    #------------------------------------------------------------
    extend type Query{
        persona(id:Int!): persona,
        personas:[persona]
        searchPersona(search:String!):[persona]

    }
    #------------------------------------------------------------
    #MUTATIONS
    #------------------------------------------------------------
    extend type Mutation{
        createPersona(input: CreatePersonaInput): persona!         
        updatePersona(input: UpdatePersonaInput): Boolean! 
        deletePersona(input: PersonaID): Boolean!    

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
    
    input UpdatePersonaInput{
        id:ID!,
        nombre:String!,
        apellidoPaterno:String!,
        apellidoMaterno:String!,
        direccion:String!,
        telefono:String!
    },
    input PersonaID{
        id:ID!
    }
`