import {gql} from 'apollo-server-express'

import personaSchema from './persona'

const linkedShema=gql`
    type Query{
        _:Boolean
    }
    type Mutation{
        _:Boolean
    }
`;

export default [linkedShema, personaSchema]