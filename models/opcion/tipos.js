import { gql } from "apollo-server-express";

// definiciones de los tipos (modelos, estructura de la coleccion Ronda)

const tiposOpcion = gql`
  type Opcion {
    _id: ID!
    enunciado: String!
  }
  type Query {
    Opciones: [Opcion]
    Opcion(_id: String!): Opcion
  }
  type Mutation {
    crearOpcion(enunciado: String!): Opcion

    eliminarOpcion(_id: String!): Opcion

    editarOpcion(_id: String!, enunciado: String): Opcion
  }
`;
export { tiposOpcion };
