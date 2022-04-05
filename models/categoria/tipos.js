import { gql } from "apollo-server-express";

// definiciones de los tipos (modelos, estructura de la coleccion Ronda)

const tiposCategoria = gql`
  type Categoria {
    _id: ID!
    dificultad: String!
  }
  type Query {
    Categorias: [Categoria]
    Categoria(_id: String!): Categoria
  }
  type Mutation {
    crearCategoria(dificultad: String!): Categoria

    eliminarCategoria(_id: String!): Categoria

    editarCategoria(_id: String!, dificultad: String): Categoria
  }
`;
export { tiposCategoria };
