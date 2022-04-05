import { jugadorModel } from "./jugador.js";
const resolversJugador = {
  Query: {
    // QUERYS JUGADOR
    Jugadores: async (parent, args, context) => {
      const jugadores = await jugadorModel.find();
      return jugadores;
    },
    Jugador: async (parent, args, context) => {
      const jugador = await jugadorModel.find({ _id: args._id });
      return jugador[0];
    },
  },

  Mutation: {
    // MUTATIONS DE JUGADOR
    crearJugador: async (parent, args, context) => {
      const jugadorCreada = await jugadorModel.create({
        nombre: args.nombre,
      });
      return jugadorCreada;
    },

    eliminarJugador: async (parent, args) => {
      const jugadorEliminada = await jugadorModel.findOneAndDelete({
        _id: args._id,
      });
      return jugadorEliminada;
    },

    editarJugador: async (parent, args, context) => {
      const jugadorEditada = await jugadorModel.findByIdAndUpdate(
        args._id,
        {
          nombre: args.nombre,
        },
        { new: true }
      );
      return jugadorEditada;
    },
  },
};
export { resolversJugador };
