import { tiposRonda } from "../models/ronda/tipos.js";
// import { tiposJugador } from "../models/jugador/tipos.js";
import { tiposPregunta } from "../models/pregunta/tipos.js";
import { tiposCategoria } from "../models/categoria/tipos.js";
// import { tiposOpcion } from "../models/opcion/tipos.js";
// definicion de tipos globales o input globales

export const tipos = [
  tiposRonda,
  // tiposJugador,
  tiposPregunta,
  tiposCategoria,
  // tiposOpcion,
]; //exporto todos los tipos para ser usuados en toda la aplicacion los guardo en una variable
//  y esta es la recibira como parameto typeDefs del ApolloServer el en index.ts solo la importo en
//  el index y se lo paso a apolloserver
