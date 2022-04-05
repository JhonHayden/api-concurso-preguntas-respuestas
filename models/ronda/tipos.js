import { gql } from "apollo-server-express";

// definiciones de los tipos (modelos, estructura de la coleccion Ronda)

const tiposRonda = gql`
  type Ronda {
    _id: ID!
    dificultad: String!
    premio: String!
  }
  type Query {
    Rondas: [Ronda]
    Ronda(_id: String!): Ronda
  }
  type Mutation {
    crearRonda(dificultad: String!, premio: String!): Ronda

    eliminarRonda(_id: String!): Ronda

    editarRonda(_id: String!, dificultad: String, premio: String): Ronda
  }
`;
export { tiposRonda };
