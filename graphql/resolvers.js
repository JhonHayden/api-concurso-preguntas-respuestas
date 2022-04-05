// import { resolversJugador } from "../models/jugador/resolvers.js";
import { resolversRonda } from "../models/ronda/resolvers.js";
import { resolversPregunta } from "../models/pregunta/resolvers.js";
import { resolversCategoria } from "../models/categoria/resolvers.js";
// import { resolversOpcion } from "../models/opcion/resolvers.js";

// resolvers globales para toda la aplicacion
export const resolvers = [
  // resolversJugador,
  resolversPregunta,
  resolversRonda,
  resolversCategoria,
  // resolversOpcion,
];
// estos resolvers se los paso a ApolloServer en su parametro de resolvers por medio de importar
// en el index.js esta varible resolver que me contiene un array con todos los resolvers
// de la aplicacion
