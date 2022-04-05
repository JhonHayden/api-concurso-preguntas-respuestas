import { rondaModel } from "./ronda.js";
const resolversRonda = {
  Query: {
    // QUERYS RONDA
    Rondas: async (parent, args, context) => {
      const rondas = await rondaModel.find();
      return rondas;
    },
    Ronda: async (parent, args, context) => {
      const ronda = await rondaModel.find({ _id: args._id });
      return ronda[0];
    },
  },

  Mutation: {
    // MUTATIONS DE RONDA
    crearRonda: async (parent, args, context) => {
      const rondaCreada = await rondaModel.create({
        dificultad: args.dificultad,
        premio: args.premio,
      });
      return rondaCreada;
    },

    eliminarRonda: async (parent, args) => {
      const rondaEliminada = await rondaModel.findOneAndDelete({
        _id: args._id,
      });
      return rondaEliminada;
    },

    editarRonda: async (parent, args, context) => {
      const rondaEditada = await rondaModel.findByIdAndUpdate(
        args._id,
        {
          dificultad: args.dificultad,
          premio: args.premio,
        },
        { new: true }
      );
      return rondaEditada;
    },
  },
};
export { resolversRonda };
