import { opcionModel } from "./opcion.js";
const resolversOpcion = {
  Query: {
    // QUERYS OPCION
    Opciones: async (parent, args, context) => {
      const opciones = await opcionModel.find();
      return opciones;
    },
    Opcion: async (parent, args, context) => {
      const opcion = await opcionModel.find({ _id: args._id });
      return opcion[0];
    },
  },

  Mutation: {
    // MUTATIONS DE OPCION
    crearOpcion: async (parent, args, context) => {
      const opcionCreada = await opcionModel.create({
        enunciado: args.enunciado,
      });
      return opcionCreada;
    },

    eliminarOpcion: async (parent, args) => {
      const opcionEliminada = await opcionModel.findOneAndDelete({
        _id: args._id,
      });
      return opcionEliminada;
    },

    editarOpcion: async (parent, args, context) => {
      const opcionEditada = await opcionModel.findByIdAndUpdate(
        args._id,
        {
          enunciado: args.enunciado,
        },
        { new: true }
      );
      return opcionEditada;
    },
  },
};
export { resolversOpcion };
