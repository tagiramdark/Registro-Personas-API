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
    type resultpersonas{
        results:[persona]
    }
    
    #------------------------------------------------------------
    #QUERIES
    #------------------------------------------------------------
    extend type Query{
        persona(id:Int!): resultpersonas,
        personas:resultpersonas
        searchPersona(search:String!):resultpersonas

    }
    #------------------------------------------------------------
    #MUTATIONS
    #------------------------------------------------------------
    extend type Mutation{
        createPersona(input: CreatePersonaInput): resultpersonas!         
        updatePersona(input: UpdatePersonaInput): resultpersonas! 
        deletePersona(input: PersonaID): resultpersonas!    

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