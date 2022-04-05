import { gql } from "apollo-server-express";

// definiciones de los tipos (modelos, estructura de la coleccion Ronda)

const tiposJugador = gql`
  type Jugador {
    _id: ID!
    nombre: String!
  }
  type Query {
    Jugadores: [Jugador]
    Jugador(_id: String!): Jugador
  }
  type Mutation {
    crearJugador(nombre: String!): Jugador

    eliminarJugador(_id: String!): Jugador

    editarJugador(_id: String!, nombre: String): Jugador
  }
`;
export { tiposJugador };
