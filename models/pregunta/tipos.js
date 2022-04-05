import { gql } from "apollo-server-express";

// definiciones de los tipos (modelos, estructura de la coleccion Ronda)

const tiposPregunta = gql`
  type Pregunta {
    _id: ID!
    enunciado: String!
    respuesta: String!
  }
  type Query {
    Preguntas: [Pregunta]
    Pregunta(_id: String!): Pregunta
  }
  type Mutation {
    crearPregunta(enunciado: String!, respuesta: String!): Pregunta

    eliminarPregunta(_id: String!): Pregunta

    editarPregunta(_id: String!, enunciado: String, respuesta: String): Pregunta
  }
`;
export { tiposPregunta };
